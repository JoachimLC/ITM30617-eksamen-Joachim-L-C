import React from "react";
import LogList from "./LogList";

const WorkLog = ({ logs }) => {
  return (
    <>
      <h1>Arbeidslogg</h1>
      <div className="Worklog">
        <div className="loglistHeader">
          <p>Når loggført</p>
          <p>Når gjennomført</p>
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
