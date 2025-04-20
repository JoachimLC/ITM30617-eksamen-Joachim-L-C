import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { getAllGroupMembers } from "../sanity/service";

export default function Layout({ children }) {
  const [groupMembers, setGroupMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllGroupMembers();
      setGroupMembers(data);
    };
    fetchData();
  }, []);

  return (
    <>
    <header className="headerLayout">
      <h1>UIN25_Gruppe35 </h1>
      <Nav groupMembers={groupMembers} />
    </header>
    <main>
        {children}
    </main>
    </>
  );
}
