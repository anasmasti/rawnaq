import Link from "next/link";
import PropTypes from "prop-types";

export default function NavItem({ title, href }) {
  return (
    <li>
      <Link href={href}>
        <a
          className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-neutral-500 md:p-0 hover:text-red-400"
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
};