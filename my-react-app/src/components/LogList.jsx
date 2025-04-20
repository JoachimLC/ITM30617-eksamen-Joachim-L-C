import React from "react";

const LogList = ({ logs }) => {
  return (
    <section className="loglist">
      <ul>
        {logs.map((logitem) => (
          <li key={logitem._id}>
            <time>{new Date(logitem._createdAt).toLocaleString()}</time>
            <time>{new Date(logitem.date).toLocaleString()}</time>
            <p>{logitem.memberName}</p>
            <p>{logitem.action}</p>
            <p>{logitem.hoursSpent}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LogList;
