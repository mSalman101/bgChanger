import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  function changeBG(e) {
    const cur = e.target.innerText;
    console.log(cur);
    setColor((prevcolor) => cur);
  }
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 border-2 rounded-2xl "
          style={{ backgroundColor: "gray" }}
        >
          <div className="flex flex-wrap justify-center gap-3 shadow-lgbg-white px-3 py-2 rounded-3xl">
            <button
              onClick={changeBG}
              /*or i could hv used callbk funct onClick(()=>setColor(red))  */
              className="outline-none px-4 py-1 rounded-full Itext-white shadow-lg  "
              style={{ backgroundColor: "red" }}
            >
              red
            </button>
            <button
              onClick={changeBG}
              className="outline-none px-4 py-1 rounded-full Itext-white shadow-lg  "
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
            <button
              onClick={changeBG}
              className="outline-none px-4 py-1 rounded-full Itext-white shadow-lg  "
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
