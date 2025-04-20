import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav({ groupMembers }) {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to={`/`}>Hjem</NavLink></li>
          {groupMembers.map((member) => (
            <li key={member._id}>
              <NavLink to={`/member/${member._id}`}>
                {member.name.split(" ")[0]}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
