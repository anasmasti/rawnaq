import NavItem from "./NavItem";

export default function NavItems() {
  let menuItems = [
    {
      id: 1,
      title: "Accueil",
      href: "/",
    },
    {
      id: 2,
      title: "À propos de nous",
      href: "/about",
    },
    {
      id: 3,
      title: "Produits",
      href: "/products",
    },
    {
      id: 4,
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <ul
      className={`flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-meduim text-4xl font-bold`}
    >
      {menuItems.map((item) => (
        <NavItem key={item.id} title={item.title} href={item.href} />
      ))}
    </ul>
  );
}