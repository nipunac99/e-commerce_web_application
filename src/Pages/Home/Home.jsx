import Slider from "../../components/Slider/Slider";
import React from "react";
import "./Home.scss";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import ContactUs from "../../components/ContactUs/ContactUs";
import Tabs from "../../components/Tabs/Tabs"
import VerticalTabs from "../../components/VerticalTabs/VerticalTabs";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Tabs/>
      <VerticalTabs />
      <ContactUs />
    </div>
  );
};

export default Home;
