import NavItem from "./NavItem";
import {
  BiNews,
  BiFootball,
  BiMovie,
  BiHomeAlt,
  BiLineChart,
  BiMessageSquareDetail,
  BiFoodMenu,
} from "react-icons/bi";

export default function NavItems() {
  let menuItems = [
    {
      id: 1,
      title: "Accueil",
      href: "/",
      icon: <BiHomeAlt className="text-neutral-600" />,
    },
    {
      id: 3,
      title: "Actualités",
      href: "/actualites/Actualités",
      icon: <BiNews className="text-neutral-600" />,
    },
    {
      id: 4,
      title: "Sports",
      href: "/actualites/Sports",
      icon: <BiFootball className="text-neutral-600" />,
    },
    {
      id: 5,
      title: "Économie",
      href: "/actualites/Économie",
      icon: <BiLineChart className="text-neutral-600" />,
    },
    {
      id: 6,
      title: "Divertissement",
      href: "/actualites/Divertissement",
      icon: <BiMovie className="text-neutral-600" />,
    },
    {
      id: 2,
      title: "À propos de nous",
      href: "/about",
      icon: <BiFoodMenu className="text-neutral-600" />,
    },

    {
      id: 4,
      title: "Contact",
      href: "/contact",
      icon: <BiMessageSquareDetail className="text-neutral-600" />,
    },
  ];

  return (
    <ul
      className={`flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-meduim text-4xl font-bold`}
    >
      {menuItems.map((item) => (
        <NavItem
          key={item.id}
          title={item.title}
          href={item.href}
          icon={item.icon}
        />
      ))}
    </ul>
  );
}
