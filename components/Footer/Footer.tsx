import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white py-8">
      <div className="container mx-auto flex justify-between">
        {/* Logo */}
        <div className="flex w-1/5 items-center">
          <img src="/logo.png" alt="Logo" className="h-12" />
        </div>

        {/* Page Links */}
        <div className=" hidden sm:flex justify-center items-center w-2/5 space-y-2">
          <div className="w-1/2 flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Service</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="w-1/2 flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Service</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Support Info */}
        <div className="flex w-2/5 flex-col items-end space-y-2">
          <p>Email: support@example.com</p>
          <p>Call: (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
