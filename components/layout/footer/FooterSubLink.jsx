import Link from "next/link";

export default function FooterSubLink({ href, title }) {
  return (
    <li>
      <Link href={href}>
        <a className="text-neutral-400">{title}</a>
      </Link>
    </li>
  );
}