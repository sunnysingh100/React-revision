import {useParams} from "react-router-dom";

function User() {
  const {userId} = useParams();

  return (
    <div className="py-2 text-5xl text-center text-black bg-orange-400">
      User: {userId}
    </div>
  );
}

export default User;
