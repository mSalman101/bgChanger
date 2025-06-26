import React, { useState } from "react";

export default function Hero() {
  const [color, setColor] = useState("");

  const incr = (e) => {
    let bgc = e.target.innerHTML;

    console.log(bgc);
    setColor((color) => e.target.innerHHTML);
  };
  // const [color, setColor] = useState("");

  return (
    <>
      <div className="inline-flex m-7 ">
        <button
          onClick={incr}
          className="bg-red-300 hover:bg-red-600 text-black-800 font-bold py-2 px-4 rounded-l"
        >
          red
        </button>
        <button
          onClick={incr}
          className="bg-blue-300 hover:bg-blue-600  text-black-800 font-bold py-2 px-4 rounded-r"
        >
          blue
        </button>
        <button
          onClick={incr}
          className="bg-green-300 hover:bg-green-600 text-black-800 font-bold py-2 px-4 rounded-l"
        >
          green
        </button>
        <button
          onClick={incr}
          className="bg-gray-500 hover:bg-gray-900 text-gray-100 font-bold py-2 px-4 rounded-r"
        >
          black
        </button>
      </div>
    </>
  );
}
