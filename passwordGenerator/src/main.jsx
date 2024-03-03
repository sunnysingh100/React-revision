import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* 
import {useState} from "react";

function App() {
  const [length, setLength] = useState(8);

  const handleLengthChange = (event) => {
    setLength(event.target.value);
  };

  return (
    <div className="min-h-screen bg-black h-">
      <div className="flex flex-col w-1/2 mx-auto bg-gray-700 h-80">
        <h1 className="mt-4 text-2xl text-center text-white">
          Password Generator
        </h1>

        <div className="flex items-center justify-center w-5 mx-auto mt-2">
          <input name="Password container" className="p-2 rounded-l-lg h-19" />
          <button className="p-2 font-bold text-white bg-blue-600 rounded-r-lg h-19">
            copy
          </button>
        </div>
        <div className="flex mt-10 ml-10 text-orange-400">
          <input
            type="range"
            min={6}
            max={18}
            step={1}
            value={length}
            onChange={handleLengthChange}
          />
          <label className="ml-3">Length: {length}</label>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
}

export default App;

*/
