"use client";

import { createContext, useState, useEffect } from "react";

const MenuContext = createContext({
  isMenuOpen: false,
  setIsMenuOpen: function (isShow: boolean) {},
});

export function MenuContextProvider(props: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(isMenuOpen);
  }, [isMenuOpen]);

  const context = {
    isMenuOpen,
    setIsMenuOpen: (isShow: boolean) => setIsMenuOpen(isShow),
  };

  return (
    <MenuContext.Provider value={context}>
      {props.children}
    </MenuContext.Provider>
  );
}

export default MenuContext;
