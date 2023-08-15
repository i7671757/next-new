import Link from "next/link";
import { Navigation } from "./Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
];

const TheHeader = () => {
  return (
    <header className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
      {/* <Link
        href="/"
        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
      >
        Home
      </Link>
      <Link
        href="/blog"
        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
      >
        Blog
      </Link>
      <Link
        href="/about"
        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
      >
        About
      </Link> */}
      <Navigation NavLinks={navItems} />
    </header>
  );
};

export { TheHeader };
