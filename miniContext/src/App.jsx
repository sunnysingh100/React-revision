import Login from "./components/Login";
import User from "./components/User";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Hello ji</h1>
      <Login />
      <User />
    </UserContextProvider>
  );
}

export default App;
