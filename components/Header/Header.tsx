import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full py-2">
      {/* Logo */}
      <Image src={"/logo.png"} width={150} height={50} alt={"logo"} />
      {/* Auth */}{" "}
      <div className="flex gap-1">
        <Button variant="outline">Sign up</Button>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
