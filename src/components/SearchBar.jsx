import React from "react";
import { useState } from "react";

export default function SearchBar({ originalJobList, jobList, setJobList }) {
  let fullTimeOnly = false;
  return (
    <section className="input-bar">
      <div className="input-group mb-3">
        <span className="input-group-text">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
              fill="#5964E0"
              fill-rule="nonzero"
            />
          </svg>
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
          placeholder="filter by job title and companies"
          onChange={handleFilterByTitleOrCompanies}
          style={{ backgroundColor: "var(--white)" }}
        ></input>
        <span className="input-group-text">
          <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
              fill="#5964E0"
              fill-rule="nonzero"
            />
          </svg>
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
          placeholder="filter by location"
          onChange={handleFilterByLocation}
          style={{ backgroundColor: "var(--white)" }}
        ></input>
        <div className="checkbox-container">
          <input
            className="form-check-input align-self-center"
            type="checkbox"
            value=""
            id="full-time-filter-checkbox"
            onChange={handleFullTimeOnlyCheckbox}
          />
          <label className="form-check-label" for="full-time-filter-checkbox">
            Full Time Only
          </label>
        </div>
      </div>
    </section>
  );

  function handleFilterByTitleOrCompanies(e) {
    let userInput = e.target.value;
    if (userInput.length > 0) {
      setJobList(
        originalJobList.filter(
          (job) =>
            job.position.toLowerCase().includes(userInput.toLowerCase()) ||
            job.company.toLowerCase().includes(userInput.toLowerCase())
        )
      );
    } else {
      setJobList(originalJobList);
    }
  }

  function handleFullTimeOnlyCheckbox(e) {
    fullTimeOnly = e.target.checked;
    if (fullTimeOnly) {
      // filter jobs to show only full time, update State with new list
      setJobList(jobList.filter((job) => job.contract === "Full Time"));
    } else {
      // filter jobs to show all, update State with the original list!
      setJobList(originalJobList);
    }
  }

  function handleFilterByLocation(e) {
    let userLocationInput = e.target.value;
    if (userLocationInput.length > 0) {
      setJobList(
        originalJobList.filter((job) =>
          job.location.toLowerCase().includes(userLocationInput.toLowerCase())
        )
      );
    } else {
      setJobList(originalJobList);
    }
  }
}
