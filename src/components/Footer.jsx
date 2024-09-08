import React from "react";

export default function Footer() {
  return (
    <footer className="text-center personal-info">
      <div className="footer-email">nydiasubur@gmail.com</div>
      <div className="trademark m-3">
        <div className="social-links m-3 d-flex justify-content-evenly">
          <a
            href="https://x.com/nydiasubur"
            target="_blank"
            alt="nydia's twitter "
          >
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a
            href="mailto:nydiasubur@gmail.com"
            target="_blank"
            className="email-link"
          >
            <i className="fa-regular fa-envelope"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/nydiasubur/"
            target="_blank"
            alt="nydia's linkedIn "
          >
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>

          <a href="https://github.com/nydiasubur" target="_blank">
            <i className="fa-brands fa-square-github"></i>
          </a>
        </div>
        Coded with 🤍 by Nydia Subur. This website is {" "}
        <a
          href="https://github.com/nydiasubur/devjobs-react-webApp"
          target="_blank"
          className="footer-link-color"
        >
          open-sourced
        </a>
        , and hosted at{" "}
        <a
          href="https://dev-job-web-app-react.netlify.app/"
          target="_blank"
          className="footer-link-color"
        >
          {" "}
          Netlify{" "}
        </a>
      </div>
    </footer>
  );
}
