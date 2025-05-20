import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Stats from "../components/Stats";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Fluentor";
  }, []);
  return (
    <div className="bg-base-200">
      <div className="">
        <Banner></Banner>
        <Stats></Stats>
      </div>
    </div>
  );
};

export default Home;
