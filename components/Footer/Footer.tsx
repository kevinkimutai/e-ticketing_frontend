import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-stone-900 to-stone-800 text-white py-8">
      <Image
        src={
          "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="banner"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 w-full h-full object-cover opacity-40"
      />
      <div className="container relative z-10 mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Logo */}
        <div className="flex w-[300px] md:w-1/5 items-center justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Logo"
            height={200}
            width={200}
            className="h-12"
          />
        </div>

        {/* Page Links */}
        <div className="flex justify-center items-center w-full md:w-3/5 space-y-2 mb-6  ">
          <div className="w-1/2 flex justify-center items-center flex-col ">
            <h3 className="font-semibold text-lg mb-4 text-yellow-300">Shop</h3>

            <Link href="/" className="text-sm">
              Tickets
            </Link>
            <Link href="/" className="text-sm">
              Merch
            </Link>
            <Link href="/" className="text-sm">
              Paid Content
            </Link>
          </div>
          <div className="w-1/2 flex justify-center items-center flex-col ">
            <h3 className="font-semibold text-lg mb-4 text-yellow-300">
              Support
            </h3>

            <Link href="/" className="text-sm">
              Ticket Issues
            </Link>
            <Link href="/" className="text-sm">
              Ticket Your Event
            </Link>
            <Link href="/" className="text-sm">
              Customer Care
            </Link>
          </div>
        </div>

        {/* Support Info */}
        <div className="flex w-full md:w-2/5 flex-col justify-center items-end  space-y-2 ">
          <p className="flex justify-center items-center">
            <Mail size={20} className="text-yellow-200" /> :
            support@ticketpass.com
          </p>
          <p className="flex justify-center items-center ">
            <Phone size={20} className="text-yellow-200" />: (123) 456-7890
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
