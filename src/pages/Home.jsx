import React, { useEffect } from "react";
import Banner from "../components/Banner";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Fluentor";
  }, []);
  return (
    <div className="bg-base-200">
      <div className="w-11/12 mx-auto">
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
