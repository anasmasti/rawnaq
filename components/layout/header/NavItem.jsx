import Link from "next/link";
import PropTypes from "prop-types";

export default function NavItem({ title, href, icon }) {
  return (
    <li className="flex items-center gap-1">
        {icon}
      <Link href={href}>
        <a
          className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-neutral-600 md:p-0 hover:text-blue-400"
          data-testid={href}
        >
          {title}
        </a>
      </Link>
    </li>
  );
}

NavItem.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.any,
};