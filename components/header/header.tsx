import Link from "next/link";
import HeaderMenu from "./header-menu";
import { MenuContextProvider } from "@/store/menu-notification";

const MainHeader = () => {
  return (
    <MenuContextProvider>
      <header className="grid grid-cols-6 px-16 pt-8">
        <div className="logo uppercase col-span-2">
          <Link href="/" className="font-medium text-2xl">Logo</Link>
        </div>

        <div className="col-span-4 ml-auto">
          <HeaderMenu />
        </div>
      </header>
    </MenuContextProvider>
  );
};

export default MainHeader;
