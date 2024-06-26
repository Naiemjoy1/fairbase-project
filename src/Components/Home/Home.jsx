import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Home = () => {
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <div
        className="hero h-96"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
