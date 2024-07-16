import Header from "../Component/Header";
import HeroSection from "../Component/Hero Section";
import WhatLearn from "../Component/What Learn";
import NewArticle from "../Component/New Article";
import Top5rank from "../Component/Top5rank";
import KodelifyUsers from "../Component/Kodefily Users";
import Footer from "../Component/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return(
    <>
    <div>
      <Helmet>
        <title>Kodelify - The Best Competitive Programming In The World</title>
      </Helmet>
    </div>
      <Header />
      <HeroSection />
      <WhatLearn />
      <NewArticle />
      <Top5rank />
      <KodelifyUsers />
      <Footer />
    </>
  );
}

export default Home;