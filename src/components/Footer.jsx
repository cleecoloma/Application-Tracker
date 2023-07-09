import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div class="footer-links">
        <a
          style={{ color: "black", paddingRight: "1rem" }}
          id="github-icon"
          href="https://github.com/cleecoloma"
        >
          <GitHubIcon />
        </a>
        <a
          id="linked-icon"
          style={{ fontSize: "small" }}
          href="https://www.linkedin.com/in/chesterleecoloma/"
        >
          <LinkedInIcon />
        </a>
      </div>
      <div class="footer-text">
        <p>
          Created by <strong>Chester Lee Coloma</strong> | {year}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
