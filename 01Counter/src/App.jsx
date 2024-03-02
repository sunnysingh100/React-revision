import {useState} from "react";

function App() {
  const [name, setName] = useState("Sunny");
  const [value, setValue] = useState(1);

  const icrease = () => {
    setValue((prevValue) => prevValue + 1);
    setValue((prevValue) => prevValue + 1);
    setValue((prevValue) => prevValue + 1);
    setValue((prevValue) => prevValue + 1);
  };

  const decrease = () => {
    setValue(value - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen ">
      <h1 className="text-3xl text-red-600">Hello</h1>
      <h2>Name: {name}</h2>
      <h2>Value: {value}</h2>
      <button
        className="p-4 m-6 bg-green-400 rounded-3xl hover:bg-red-300"
        onClick={icrease}
      >
        Increase
      </button>
      <br />
      <button
        className="p-4 bg-green-100 rounded-3xl hover:bg-blue-300"
        onClick={decrease}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
