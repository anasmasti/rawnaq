import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a className="flex items-center">
        <span className="self-center text-xl font-bold whitespace-nowrap">
          Rawnaq
        </span>
      </a>
    </Link>
  );
}