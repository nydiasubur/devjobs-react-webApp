import React from "react";
import SearchBar from "./SearchBar";
export default function DevJobsHomepage() {
  return (
    <div className="container">
      <section className="navbar"></section>
      <SearchBar />

      <div className=" container listOfCards mt-5">
        <div className="row gx-5 gy-5 d-flex justify-content-between">
          <div className="col-md-6 col-lg-4 ">
            <div className="card">
              <div className="image-container">
                <img
                  src="../src/assets/logos/scoot.svg"
                  style={{ backgroundColor: "hsl(36, 87%, 49%)" }}
                  className="company-card-logo"
                  alt="scoot SVG"
                />
              </div>

              <div className="card-body pl-4">
                <h6 className="mb-2">5h ago . Full Time</h6>
                <h5 className="card-title">Senior Software Engineer</h5>
                <h6 className="mb-2">Scoot</h6>
                <h6 className="mt-3 country-card-style">San Francisco, CA</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="image-container">
                <img
                  src="../src/assets/logos/scoot.svg"
                  style={{ backgroundColor: "hsl(36, 87%, 49%)" }}
                  className="company-card-logo"
                  alt="scoot SVG"
                />
              </div>

              <div className="card-body pl-4">
                <h6 className="mb-2">5h ago . Full Time</h6>
                <h5 className="card-title">Senior Software Engineer</h5>
                <h6 className="mb-2">Scoot</h6>
                <h6 className="mt-3 country-card-style">San Francisco, CA</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="image-container">
                <img
                  src="../src/assets/logos/scoot.svg"
                  style={{ backgroundColor: "hsl(36, 87%, 49%)" }}
                  className="company-card-logo"
                  alt="scoot SVG"
                />
              </div>

              <div className="card-body pl-4">
                <h6 className="mb-2">5h ago . Full Time</h6>
                <h5 className="card-title">Senior Software Engineer</h5>
                <h6 className="mb-2">Scoot</h6>
                <h6 className="mt-3 country-card-style">San Francisco, CA</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="image-container">
                <img
                  src="../src/assets/logos/scoot.svg"
                  style={{ backgroundColor: "hsl(36, 87%, 49%)" }}
                  className="company-card-logo"
                  alt="scoot SVG"
                />
              </div>

              <div className="card-body pl-4">
                <h6 className="mb-2">5h ago . Full Time</h6>
                <h5 className="card-title">Senior Software Engineer</h5>
                <h6 className="mb-2">Scoot</h6>
                <h6 className="mt-3 country-card-style">San Francisco, CA</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-3 mb-3 btn btn-primary">Load More</button>
    </div>
  );
}
