import React from "react";
import SearchBar from "./SearchBar";
import data from "../data.json";
import { useState } from "react";
import ListOfJobCards from "./ListOfJobCards";
export default function DevJobsHomepage() {
  const [jobList, setJobList] = useState(data);
  return (
    <>
      <img
        src="../src/assets/desktop/bg-pattern-header.svg"
        alt="background pattern header"
        className="img-fluid"
      />
      <div className="container">
        <section className="navbar"></section>
        <SearchBar />
        <div className=" container listOfCards mt-5">
          <div className="row gx-5 gy-5 d-flex justify-content-between">
            <ListOfJobCards jobList={jobList} />
          </div>
        </div>

        <button className="mt-3 mb-3 btn btn-primary">Load More</button>
      </div>
    </>
  );
}
