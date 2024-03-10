import React from "react";
import GitHubLogo from "./images/github-mark.png"

function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
      <a href="https://github.com/CyanFaux">
        <img src={GitHubLogo} alt="GitHub Logo" style={{ width: "3rem", height: "3rem" }}/>
      </a>
    </div>
  );
}

export default Contact;
