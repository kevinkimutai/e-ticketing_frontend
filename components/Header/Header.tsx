import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex justify-end  sm:justify-between items-center w-full px-2 sm:px-4 md:px-6 lg:px-12  py-2">
      {/* Logo */}
      <Image
        src={"/logo.png"}
        width={150}
        height={50}
        alt={"logo"}
        className="hidden sm:block"
      />
      {/* Auth */}{" "}
      <div className="flex gap-1">
        <Button variant="outline">Sign up</Button>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
