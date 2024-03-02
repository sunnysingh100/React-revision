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
    <div>
      <h1>Hello</h1>
      <h2>Name: {name}</h2>
      <h2>Value: {value}</h2>
      <button onClick={icrease}>Increase</button>
      <br />
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
