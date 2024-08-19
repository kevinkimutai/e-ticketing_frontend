import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
  ChartNoAxesCombined,
  Contact,
  LayoutDashboard,
  LogOut,
  UserRound,
} from "lucide-react";
import NavIconComponent from "./NavIconComponent";
import { getSession } from "@auth0/nextjs-auth0";

const components: {
  icon: any;
  title: string;
  href: string;
}[] = [
  {
    icon: LayoutDashboard,
    title: "Attendee Dashboard",
    href: "/dashboard/attendee/user",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Organiser Dashboard",
    href: "/dashboard/organiser/organiser",
  },
  {
    icon: Contact,
    title: "Profile Details",
    href: "/user",
  },
  {
    icon: LogOut,
    title: "Logout",
    href: "/api/auth/logout",
  },
];

const Header = async () => {
  const session = await getSession();
  const user = session?.user;

  return (
    <div className="fixed flex justify-between items-center w-full px-2 sm:px-4 md:px-6 lg:px-12  py-2 z-50 bg-white">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          width={150}
          height={50}
          alt={"logo"}
          className="w-[110px] sm:w-[120px]"
        />
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div className="flex items-center justify-center">
                <UserRound className="mr-2" />
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[300px] right-0">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    <NavIconComponent Icon={component.icon} />
                    {component.title}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:block">
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Logout
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href, title, children, ...props }, ref) => {
  return (
    <li className="flex w-full">
      <Link href={href as string} legacyBehavior passHref>
        <NavigationMenuLink
          className={`${navigationMenuTriggerStyle()} flex items-center w-full p-2`}
        >
          {children}
        </NavigationMenuLink>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
