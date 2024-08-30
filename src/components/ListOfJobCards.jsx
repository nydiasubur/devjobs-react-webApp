import React from "react";

export default function ListOfJobCards({ jobList }) {
  return (
    <>
      {jobList.map((job) => (
        <div className="col-md-6 col-lg-4" key={job.id}>
          <div className="card">
            <div className="image-container">
              <img
                src={job.logo} // Update path as needed
                style={{ backgroundColor: "hsl(36, 87%, 49%)" }}
                className="company-card-logo"
                alt="scoot SVG"
              />
              {console.log(job.logo)}
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
}