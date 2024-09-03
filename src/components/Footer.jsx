import React from "react";

export default function Footer() {
  return (
    <footer className="text-center personal-info">
      <div className="social-links m-2 d-flex justify-content-center">
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
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://github.com/nydiasubur" target="_blank">
          <i className="fa-brands fa-square-github"></i>
        </a>
      </div>

      <div className="trademark m-3">
        <div className="footer-email">nydiasubur@gmail.com</div>
        Coded with 🤍 by Nydia Subur. This website is {" "}
        <a
          href="https://github.com/nydiasubur"
          target="_blank"
          className="footer-link-color"
        >
          open-sourced
        </a>
        , and hosted at{" "}
        <a
          href="https://github.com/nydiasubur"
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
