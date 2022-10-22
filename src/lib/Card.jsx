import React from "react";

function Card() {
  return (
    <>
      <div className="group flex w-80 flex-col items-center justify-around gap-3 overflow-hidden rounded-lg border-2 bg-slate-50 pb-3 text-center shadow-sm transition-shadow duration-300 hover:shadow-2xl">
        <img
          className="hover:scale-105"
          src="https://picsum.photos/500/325"
          alt=""
        />
        <h1 className="bg-red text-2xl font-bold">Card Title</h1>
        <p className="px-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          id, iste molestias excepturi aut et provident non voluptate. Error
          delectus architecto saepe consequatur!
        </p>
        <button className="rounded bg-blue-500 py-2 px-4 text-white transition-all duration-300 group-hover:translate-y-[1px] group-hover:scale-105">
          Find Out More
        </button>
      </div>
    </>
  );
}

export default Card;
