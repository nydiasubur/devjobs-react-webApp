import React from "react";

export default function ExpandedJobDescription({
  selectedJob,
  setIsJobSelected,
  isJobSelected,
}) {
  if (!selectedJob) return null; // Render nothing if no job is selected

  return (
    <>
      <div className="expanded-job-description">
        <button onClick={() => setIsJobSelected(false)}>
          Back to Job List
        </button>
        <div className="row">
          {/*to add responsive spacing on left and right*/}
          <div className="col-2"></div>

          {/* top card section here.. main content starts here*/}
          <div className="col-8 main">
            <div className="card mb-3 top-section">
              <div className="row g-4">
                <div className="col-md-3">
                  <img
                    src={selectedJob.logo}
                    className="img-fluid p-3 company-card-logo"
                    alt="company name"
                    style={{
                      height: "140px",
                      backgroundColor: selectedJob.logoBackground,
                    }}
                  />
                </div>
                <div className="col-md-5 align-self-center">
                  <h5 className="card-title">{selectedJob.company}</h5>
                  <small className="text-body-secondary">
                    <p className="card-text">{selectedJob.website}</p>
                  </small>
                </div>
                <div className="col-md-4 align-self-center justify-content-center">
                  <button className="secondary-button-style">
                    Company Site
                  </button>
                </div>
              </div>
            </div>

            {/* job description section here */}
            <div className="job-description-section card p-5 mb-5">
              <div className="row">
                <div className="col-9 mb-4">
                  <h6 className="mb-2">
                    {selectedJob.postedAt} . {selectedJob.contract}
                  </h6>
                  <h2 className="card-title">{selectedJob.position}</h2>
                  <h6 className="mb-2">{selectedJob.company}</h6>
                  <h6 className="mt-3 country-card-style">
                    {selectedJob.location}
                  </h6>
                </div>
                <div className="col-3 d-flex align-items-center justify-content-end">
                  <button className="main-button-style">Apply now</button>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p>{selectedJob.description}</p>

                  <h4 className="pt-4 pb-4">Requirements</h4>
                  <p>{selectedJob.requirements.content}</p>
                  <ul>
                    {selectedJob.requirements.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h4 className="pt-4 pb-4">What You Will Do</h4>
                  <p>{selectedJob.role.content}</p>
                  <ol className="what-you-will-do-list">
                    {selectedJob.role.items.map((item, index) => (
                      <li key={index} className="mb-3">
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <div className="footer-expandedJobDescription">
        <div className="card p-3">
          <div className="d-flex justify-content-around align-items-center">
            <div>
              <h5 className="card-title">{selectedJob.position}</h5>
              <p className="card-text">
                <small className="text-body-secondary">
                  {selectedJob.company}
                </small>
              </p>
            </div>
            <div>
              <button className="main-button-style">Company Site</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
