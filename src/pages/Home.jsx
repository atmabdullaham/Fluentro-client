import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Fluentor";
  }, []);
  return <div>This is the Home page</div>;
};

export default Home;
