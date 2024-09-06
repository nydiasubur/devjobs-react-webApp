import React, { useEffect } from "react";
import Modal from "react-modal";
import { useState } from "react";

export default function SearchBar({ originalJobList, jobList, setJobList }) {
  const [showModal, setShowModal] = useState(false);

  const handleMobileModeFilterPopUp = () => {
    setShowModal(true); // Show the modal when the filter icon is clicked
  };

  const closeModal = () => {
    setShowModal(false); // Hide the modal when the close button or outside area is clicked
  };

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
          className="form-control text-input-style"
          aria-label="Amount (to the nearest dollar)"
          placeholder="filter by job title and companies"
          onChange={handleFilterByTitleOrCompanies}
          style={{ backgroundColor: "var(--white)" }}
        />

        <span className="input-group-text">
          <svg
            className="d-none d-md-block"
            width="17"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
              fill="#5964E0"
              fill-rule="nonzero"
            />
          </svg>
        </span>
        <input
          type="text"
          className="form-control text-input-style d-none d-md-block"
          aria-label="location filter"
          placeholder="filter by location"
          onChange={handleFilterByLocation}
          style={{ backgroundColor: "var(--white)" }}
        />

        <div className="checkbox-container ">
          <input
            className="form-check-input align-self-center d-none d-md-block"
            type="checkbox"
            value=""
            id="full-time-filter-checkbox"
            onChange={handleFullTimeOnlyCheckbox}
          />
          <label
            className="form-check-label d-none d-md-block "
            for="full-time-filter-checkbox"
          >
            Full Time Only
          </label>
        </div>
        {/* filter logo that appears in mobile screen size */}
        <span
          className="input-group-text d-block d-md-none"
          onClick={handleMobileModeFilterPopUp}
        >
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
              fill="#6E8098"
              fill-rule="nonzero"
            />
          </svg>
        </span>
        {/* pop up to show location and full time only checkbox filter for mobile size*/}
        {showModal ? (
          <div
            className="modal-backdrop card small-card-homepage d-flex align-items-center "
            onClick={closeModal}
          >
            <div
              className="modal-content "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="d-flex mb-3">
                <span className="input-group-text">
                  <svg
                    width="17"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
                      fill="#5964E0"
                      fill-rule="nonzero"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control text-input-style"
                  aria-label="location filter"
                  placeholder="filter by location"
                  onChange={handleFilterByLocation}
                  style={{ backgroundColor: "var(--white)" }}
                />
              </div>

              <div className="checkbox-container ">
                <input
                  className="form-check-input align-self-center "
                  type="checkbox"
                  value=""
                  id="full-time-filter-checkbox"
                  onChange={handleFullTimeOnlyCheckbox}
                />
                <label
                  className="form-check-label "
                  for="full-time-filter-checkbox"
                >
                  <span className="fw-bold">Full Time Only</span>
                </label>
              </div>

              <button className="main-button-style" onClick={closeModal}>
                Search
              </button>
            </div>
          </div>
        ) : null}
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
