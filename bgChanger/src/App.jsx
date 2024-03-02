import {useState} from "react";

const App = () => {
  const [fullColor, setFullColor] = useState("#E4DEBE");

  return (
    <div
      className="flex flex-col items-center justify-end min-h-screen duration-200"
      style={{backgroundColor: fullColor}}
    >
      <div className="flex items-end justify-center p-4 bg-white border-2 border-solid rounded-full mb-9">
        <button
          className="px-4 py-2 mr-2 text-white bg-red-500 rounded-full"
          onClick={() => {
            setFullColor("#EE4266");
          }}
        >
          Red
        </button>
        <button
          className="px-4 py-2 mr-2 text-white bg-green-500 rounded-full"
          onClick={() => {
            setFullColor("#65B741");
          }}
        >
          Green
        </button>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-full"
          onClick={() => {
            setFullColor("#1D24CA");
          }}
        >
          Blue
        </button>
      </div>
    </div>
  );
};

export default App;
