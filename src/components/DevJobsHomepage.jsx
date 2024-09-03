import React from "react";
import SearchBar from "./SearchBar";
import data from "../data.json";
import { useState } from "react";
import ListOfJobCards from "./ListOfJobCards";
import ExpandedJobDescription from "./ExpandedJobDescription";
import TopNavBar from "./TopNavBar";
import Footer from "./Footer";
export default function DevJobsHomepage() {
  const originalJobList = data;
  const [jobList, setJobList] = useState(data);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isJobSelected, setIsJobSelected] = useState(false);

  return (
    <div>
      <TopNavBar setIsJobSelected={setIsJobSelected} />

      {isJobSelected ? (
        <ExpandedJobDescription
          selectedJob={selectedJob}
          setIsJobSelected={setIsJobSelected}
        />
      ) : (
        <div className="container">
          <section className="navbar"></section>
          <SearchBar
            jobList={jobList}
            setJobList={setJobList}
            originalJobList={originalJobList}
          />
          <div className=" container listOfCards mt-5">
            <div className="row gx-5 gy-5 d-flex justify-content-between">
              <ListOfJobCards
                jobList={jobList}
                selectedJob={selectedJob}
                setSelectedJob={setSelectedJob}
                setIsJobSelected={setIsJobSelected}
              />
            </div>
            <button className="btn load-more-button main-button-style ">
              Load More
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
