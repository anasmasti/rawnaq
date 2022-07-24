import React from "react";

export default function LandingCard() {
  return (
    <div className="w-full relative p-3 flex justify-start items-center rounded-sm">
      <div className="absolute text-white z-10 p-5">
        <p>
          Publier le : <span className="text-gray-400">Ven 12 Avril 2022</span>
        </p>
        <h2 className="text-6xl ">
          iOS 16 and macOS Ventura show how far ahead Apple really is
        </h2>
      </div>

      <img
        className="w-full object-cover z-0 h-[400px] rounded-sm"
        src="https://media.idownloadblog.com/wp-content/uploads/2022/06/iPadOS-16-wallpaper-from-WWDC-2022-Dark-Mode.jpg"
        alt=""
      />
    </div>
  );
}
