import React from "react";
import LogList from "./LogList";

const WorkLog = ({ logs }) => {
  return (
    <>
      <h1>Arbeidslogg</h1>
      <section className="Worklog">
        <header className="loglistHeader">
          <p>Når loggført</p>
          <p>Når gjennomført</p>
          <p>Navn</p>
          <p>Endring</p>
          <p>Timer</p>
        </header>
        <LogList logs={logs} />
      </section>
    </>
  );
};

export default WorkLog;
