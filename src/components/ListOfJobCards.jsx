import React from "react";

export default function ListOfJobCards({
  jobList,
  setSelectedJob,
  setIsJobSelected,
}) {
  return (
    <>
      {jobList.map((job) => (
        <div className="col-md-6 col-lg-4" key={job.id}>
          <div
            className="card small-card-homepage"
            onClick={() => handleExpandJobCardDescription(job)}
          >
            <div
              className="image-container"
              style={{ backgroundColor: job.logoBackground }}
            >
              <img
                src={job.logo} // Update path as needed
                className="company-card-logo"
                alt="scoot SVG"
              />
            </div>
            <div className="card-body pl-4">
              <h6 className="mb-2">
                {job.postedAt} . {job.contract}
              </h6>
              <h5 className="card-title">{job.position}</h5>
              <h6 className="mb-2">{job.company}</h6>
              <h6 className="mt-3 country-card-style">{job.location}</h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  function handleExpandJobCardDescription(job) {
    setSelectedJob(job);
    setIsJobSelected(true);
  }
}
