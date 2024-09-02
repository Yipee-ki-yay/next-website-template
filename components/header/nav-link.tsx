"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

export default function NavLink({
  children,
  href,
}: {
  children: ReactElement | string;
  href: string;
}) {
  const path = usePathname();
  return (
    // <Link href={href} className={path === href ? "text-4xl menu-list__link menu-list__link--active" : "text-4xl menu-list__link"}>
    <Link href={href} className={`text-4xl menu-list__link ${path === href ? 'menu-list__link--active' : ''}`}>
      {children}
    </Link>
  );
}
