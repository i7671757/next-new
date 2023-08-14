"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type } from "os";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  NavLinks: NavLink[];
};

const Navigation = ({ NavLinks }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {NavLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? "active:bg-blue-600" : ""}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

export { Navigation };
