import React from "react";

export default function ExpandedJobDescription({
  selectedJob,
  setIsJobSelected,
  isJobSelected,
  // Pass setIsJobSelected to reset the view
}) {
  if (!selectedJob) return null; // Render nothing if no job is selected
  console.log("expanded selectedJob", selectedJob);
  return (
    <div className="expanded-job-description">
      <button onClick={() => setIsJobSelected(false)}>Back to Job List</button>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={selectedJob.logo}
              className="img-fluid"
              alt="company name"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{selectedJob.company}</h5>

              <p className="card-text">
                <small className="text-body-secondary">
                  <p className="card-text">{selectedJob.website}</p>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* job desctiption section here */}
      <div className="job-description-section">
        <div className="row">
          <div className="col-8">
            <h6 className="mb-2">
              {selectedJob.postedAt} . {selectedJob.contract}
            </h6>
            <h2 className="card-title">{selectedJob.position}</h2>
            <h6 className="mb-2">{selectedJob.company}</h6>
            <h6 className="mt-3 country-card-style">{selectedJob.location}</h6>
          </div>
          <div className="col-4">
            <button>apply now</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>{selectedJob.description}</p>

            <h4>Requirements</h4>
            <p>{selectedJob.requirements.content}</p>
            <p>
              {selectedJob.requirements.items.map((item, index) => {
                return (
                  <ul key={index}>
                    <li>{item}</li>
                  </ul>
                );
              })}
            </p>

            <h4>What you Will Do</h4>
            <p>{selectedJob.role.content}</p>
            {selectedJob.role.items.map((item, index) => {
              return (
                <ul key={index}>
                  <li>{item}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
