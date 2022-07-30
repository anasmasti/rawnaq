export default function Card({ title, content, publishDate, author, image, slug }) {
  return (
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
          {content[0].children.map((item) => (
            <p key={item._key} className="text-gray-500">
              {item.text}
            </p>
          ))}
        </div>
        <p className="mt-4 text-sm">
          Publier le :{"  "}
          <span className="text-gray-400">
            {new Date(publishDate).toLocaleString()}
          </span>
        </p>
        <p>
          Par :{"  "} <span className="text-gray-400">{author.name}</span>
        </p>
      </div>
    </div>
  );
}
