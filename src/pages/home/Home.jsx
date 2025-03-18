import React from "react";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import { scaleWidth } from "../../helpers/Scalefactor";
import UsingUnstop from "../../components/usingUnstop";
import CategoryCards from "../../components/CategoryCards";
import ProfileList from "../../components/ProfileCards";
import CourseCard from "../../components/CourseCard";
import OpportunityCard from "../../components/OpportunityCard";
import UpdatedCard from "../../components/UpdatedCard";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: `${scaleWidth(20)}px`,
        justifyContent: "center",
        background:
          "linear-gradient(to top, transparent 30%, transparent 92%, #7a5feb 100%, #ad9ff3 100%)",
      }}
    >
      <Navbar />
      <SearchBar />
      <CategoryCards />
      <ProfileList />
      <UsingUnstop />
      <CourseCard />
      <OpportunityCard/>
      <UpdatedCard/>
      <Footer/>
      {/* <Unlock />
        <UsingUnstop /> */}
    </div>
  );
};

export default Home;
