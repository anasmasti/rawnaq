import React from "react";

export default function Newsletter() {
  return (
    <div className="w-full bg-gray-100 flex justify-center p-20 flex-col items-center">
      <div className="p-1 bg-blue-100 rounded-sm">
        <p className="text-blue-400 text-sm">
        117+ people joined this week
        </p>
      </div>
      <h4 className="text-6xl font-bold">
      Join our newsletter
      </h4>
      <form className="mt-4">
          <div className="flex flex-row">
            <input
              type="text"
              className="
                p-2
                rounded-l-sm
              "
              placeholder="Email address"
            />
             <button
              type="submit"
              className="p-2 bg-blue-400 font-bold text-white rounded-r-sm"
            >
              S&apos;abonner
            </button>
          </div>
     
      </form>
    </div>
  );
}