import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Stats from "../components/Stats";
import LanguageCategory from "../components/LanguageCategory";
import Accordion from "../components/Accordion";
import Testimonials from "../components/Testimonials";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Fluentro";
  }, []);
  return (
    <div className="bg-base-200">
      <div className="">
        <Banner></Banner>
        <Stats></Stats>
        <LanguageCategory></LanguageCategory>
        <Testimonials></Testimonials>
        <Accordion></Accordion>
      </div>
    </div>
  );
};

export default Home;
