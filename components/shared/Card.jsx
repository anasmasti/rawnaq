import Link from "next/link";
import { truncate } from "../../utils/truncate";

export default function Card({
  title,
  content,
  publishDate,
  author,
  image,
  slug,
}) {
  let postLink = `/post/${slug}`;
  return (
    <Link href={postLink}>
      <a>
        <div className="bg-gray-50 rounded-sm">
          <div>
            <img
              className="rounded-sm h-[250px] w-full object-cover"
              src={image}
              alt={slug}
            />
          </div>
          <div className="p-4">
            <h2 className="font-bold text-xl">{title}</h2>
            <div>
              <p className="text-gray-500">{truncate(content)}</p>
            </div>
            <p className="mt-4 text-sm">
              Publier le :{"  "}
              <span className="text-gray-400">
                {new Date(publishDate).toLocaleString()}
              </span>
            </p>
            <p>
              Par :{"  "} <span className="text-gray-400">{author}</span>
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
