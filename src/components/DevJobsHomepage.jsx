import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import data from "../data.json";
import { useState } from "react";
import ListOfJobCards from "./ListOfJobCards";
import ExpandedJobDescription from "./ExpandedJobDescription";
import TopNavBar from "./TopNavBar";
import Footer from "./Footer";
export default function DevJobsHomepage() {
  const originalJobList = data; // original data not to be changed
  const [jobList, setJobList] = useState(data); //job lists that gets updated from filtering
  const [selectedJob, setSelectedJob] = useState(null);
  const [isJobSelected, setIsJobSelected] = useState(false);
  const [page, setPage] = useState(1);
  const jobCardPerPage = 6;
  const [temporaryJobListForLoadMore, setTemporaryJobListForLoadMore] =
    useState([]);

  // Effect to update temporary job list when page or jobList changes
  useEffect(() => {
    setTemporaryJobListForLoadMore(jobList.slice(0, page * jobCardPerPage));
  }, [page, jobList]);

  // Reset page to 1 when jobList changes due to filtering
  useEffect(() => {
    setPage(1);
  }, [jobList]);
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
                jobList={temporaryJobListForLoadMore}
                selectedJob={selectedJob}
                setSelectedJob={setSelectedJob}
                setIsJobSelected={setIsJobSelected}
              />
            </div>
            {temporaryJobListForLoadMore.length < jobList.length && (
              <button
                className="btn load-more-button main-button-style"
                onClick={() => setPage(page + 1)}
              >
                Load More
              </button>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
