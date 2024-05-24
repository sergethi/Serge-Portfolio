import React from "react";
import Button from "@material-ui/core/Button";
import { logEvent } from '../analytics';

function Resume({ resumeURL }) {
    const handleResumeClick = () => {
        logEvent('Projects', 'Click', 'View Resume')
    }
  return (
    <div className="resume-part" id="experience">
      <Button
        variant="outlined"
        color="inherit"
        href={resumeURL}
        style={{ color: "wheat", textAlign: "center" }}
        className="resume-part"
        target="_blank"
        onClick={handleResumeClick}
      >
        <h1>View Resume</h1>
      </Button>
    </div>
  );
}

export default Resume;
