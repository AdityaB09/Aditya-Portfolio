import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/AdityaB09" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        {/* TODO: replace with your real LinkedIn URL */}
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p>
        Portfolio built by Aditya Bagayatkar · Template by{" "}
        <a
          href="https://github.com/yujisatojr/react-portfolio-template"
          target="_blank"
          rel="noreferrer"
        >
          Yuji Sato
        </a>
      </p>
    </footer>
  );
}

export default Footer;
