// import {useState, useEffect} from "react";

import {useLoaderData} from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/sunnysingh100")
  //       .then((response) => response.json())
  //       .then((apiData) => {
  //         console.log(apiData);
  //         setData(apiData);
  //       });
  //   }, []);

  const data = useLoaderData();
  return (
    <div className="p-4 m-4 text-3xl text-center text-white bg-gray-600">
      Github followers : {data.followers}
      <img src={data.avatar_url} width={300} />
    </div>
  );
}

export default Github;
