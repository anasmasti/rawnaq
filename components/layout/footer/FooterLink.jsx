import FooterSubLink from "./FooterSubLink";
import PropTypes from "prop-types";

export default function FooterLink({ title, links }) {
  return (
    <div className="mb-6">
      <h5 className="uppercase font-bold mb-2.5">{title}</h5>

      <ul className="list-none mb-0">
        {links.map((subItem) => (
          <FooterSubLink
            key={subItem.id}
            title={subItem.title}
            href={subItem.href}
          />
        ))}
      </ul>
    </div>
  );
}

FooterLink.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array,
};