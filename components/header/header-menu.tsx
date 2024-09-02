"use client";

import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import HeaderMenuList from "./header-menu-list";
import MenuContext from "@/store/menu-notification";

export default function HeaderMenu() {
  const menuCtx = useContext(MenuContext);
  const showMobNav = menuCtx.isMenuOpen;
  const path = usePathname();

  useEffect(() => {
    if (showMobNav) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [showMobNav]);

  useEffect(() => {
    menuCtx.setIsMenuOpen(false)
  }, [path, menuCtx]);

  function handleMobNav() {
    menuCtx.setIsMenuOpen(!showMobNav)
  }

  return (
    <>
      <div
        className={showMobNav ? "nav-mobile-wrap show" : "nav-mobile-wrap hide"}
      >
        <nav className={showMobNav ? "show slideIn" : "hide slideOut"}>
          <HeaderMenuList />
        </nav>
      </div>

      <button
        className={
          showMobNav
            ? "button button-humburger active"
            : "button button-humburger"
        }
        onClick={handleMobNav}
      >
        <span></span>
      </button>
    </>
  );
}
