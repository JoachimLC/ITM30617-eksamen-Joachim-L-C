import React from "react";

const LogList = ({ logs }) => {
  return (
    <section className="loglist">
      <ul>
        {logs.map((logitem) => (
          <li key={logitem._id}>
            <div>{new Date(logitem._createdAt).toLocaleString()}</div>
            <div>{new Date(logitem.date).toLocaleString()}</div>
            <div>{logitem.memberName}</div>
            <div>{logitem.action}</div>
            <div>{logitem.hoursSpent}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LogList;
