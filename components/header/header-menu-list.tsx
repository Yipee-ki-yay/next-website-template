import links from "@/utils/links";
import NavLink from "./nav-link";

export default function HeaderMenuList() {
  return (
    <ul className="menu-list">
      {links &&
        links.map((item) => (
          <li key={item.label} className="menu-list__item mt-8">
            <NavLink href={item.href}>{item.label}</NavLink>
          </li>
        ))}
    </ul>
  );
}
