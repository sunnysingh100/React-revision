import {useContext} from "react";
import UserContext from "../context/UserContext";

function User() {
  const {user} = useContext(UserContext);

  if (!user) {
    return <h1>Not logged in</h1>;
  }

  return (
    <div>
      <h1>Username: {user.userName}</h1>
    </div>
  );
}

export default User;
