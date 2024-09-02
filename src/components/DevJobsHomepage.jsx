import React from "react";
import SearchBar from "./SearchBar";
import data from "../data.json";
import { useState } from "react";
import ListOfJobCards from "./ListOfJobCards";
import ExpandedJobDescription from "./ExpandedJobDescription";
export default function DevJobsHomepage() {
  const originalJobList = data;
  const [jobList, setJobList] = useState(data);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isJobSelected, setIsJobSelected] = useState(false);

  console.log("home page selected job", selectedJob);
  console.log("home page isjobselected", isJobSelected);

  return (
    <>
      <img
        src="../src/assets/desktop/bg-pattern-header.svg"
        alt="background pattern header"
        className="img-fluid"
      />

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
            <button className="mt-3 mb-3 btn btn-primary">Load More</button>
          </div>
        </div>
      )}
    </>
  );
}
