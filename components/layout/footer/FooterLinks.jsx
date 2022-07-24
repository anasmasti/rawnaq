import FooterLink from "./FooterLink";

export default function FooterLinks() {
  let quickLinks = [
    {
      id: 1,
      title: "Liens rapides",
      links: [
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
      ],
    },
    {
      id: 2,
      title: "Liens rapides",
      links: [
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
      ],
    },
    {
      id: 3,
      title: "Liens rapides",
      links: [
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
      ],
    },
    {
      id: 4,
      title: "Liens rapides",
      links: [
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
      ],
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2">
      {quickLinks.map((item) => (
        <FooterLink key={item.id} title={item.title} links={item.links} />
      ))}
    </div>
  );
}