"use client";
import React, { useState } from "react";
import { AiOutlineChrome } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const menuItems = [
  { id: 1, label: "Profile", link: "/" },
  { id: 2, label: "Socials", link: "/socials" },
  { id: 3, label: "Portfolio", link: "/portfolio" },
  { id: 4, label: "Resume", link: "/resume" },
  { id: 5, label: "Profile Portfolio", link: "/profileportfolio" },
];

interface MenuItem {
  id: number;
  label: string;
  link: string;
}

const Sidebar: React.FC = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const activeMenu = menuItems.find((menu: MenuItem) => menu.link === pathname);

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col ",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const getNavItemClasses = (menu: MenuItem) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu?.id === menu.id,
      }
    );
  };

  const onCollapseToggle = () => {
    setIsCollapsible(!isCollapsible);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onCollapseToggle}
      onMouseLeave={onCollapseToggle}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col rounded-lg shadow-lg bg-zink-50 px-3 py-6">
        <div className="flex flex-col items-start">
          {menuItems.map((menu: MenuItem) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={`${classes} ${activeMenu?.id === menu.id ? 'border-l-4 border-black' : ''}`} key={menu.id}  style={activeMenu?.id === menu.id ? {  } : {}}>
                <Link
  href={menu.link}
  passHref
  className={"flex py-4 px-3 items-center w-full h-full"}
  
>
  <AiOutlineChrome size={activeMenu?.id === menu.id ? 24 : 22} />
  <span className={"text-md font-medium text-text-light "} style={activeMenu?.id === menu.id ? { color: '#00000', fontWeight: 'bold' } : {}}>
    {menu.label}
  </span>
</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
