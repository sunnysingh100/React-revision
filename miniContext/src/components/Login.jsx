import {useContext, useState} from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({userName, password});
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        placeholder="Usename"
        onChange={(e) => setUserName(e.target.value)}
      />{" "}
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
