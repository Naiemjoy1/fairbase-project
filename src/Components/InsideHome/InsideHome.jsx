import { useContext } from "react";
import { HomeContext } from "../Home/Home";

const InsideHome = () => {
  const homeData = useContext(HomeContext);
  console.log(homeData);
  return (
    <div>
      <h2>inside home</h2>
    </div>
  );
};

export default InsideHome;
