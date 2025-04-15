import React from "react";
import LogList from "./LogList";

const WorkLog = ({ logs }) => {
  return (
    <>
      <h1>Arbeidslogg</h1>
      <div className="logwrapper">
        <div className="loglist-header">
          <p>Dato</p>
          <p>Navn</p>
          <p>Endring</p>
          <p>Timer</p>
        </div>
        <LogList logs={logs} />
      </div>
    </>
  );
};

export default WorkLog;
