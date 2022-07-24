import React from "react";

export default function Card({ title, content, publishDate, author }) {
  return (
    <div className="bg-gray-50 rounded-sm">
      <div>
        <img
          className="rounded-sm h-[250px] w-full object-cover"
          src="https://cloudfront-us-east-1.images.arcpublishing.com/cmg/BGNP5XWBOBE4BJXJ3HHRV65TFU.png"
          alt=""
        />
      </div>
      <div className="p-4">
        <h2 className="font-bold text-xl">
          Ukraine works to resume grain exports
        </h2>
        <p className="text-gray-500">
          KYIV, July 24 (Reuters) - Ukraine pressed ahead on Sunday with efforts
          to restart grain exports from its Black Sea ports under a deal aimed
          at easing globa..{" "}
        </p>
        <p className="mt-4">
          Publier le :{"  "}
          <span className="text-gray-400">Vendredi 2 Juin 2022</span>
        </p>
        <p>
          Par :{"  "} <span className="text-gray-400">Anas Masti</span>
        </p>
      </div>
    </div>
  );
}
