import React from 'react';
import { urlFor } from '../sanity/service';

const MemberDetails = ({ member }) => {
  return (
    <section className="memberDetails">
      <article className="MemberDetailsText">
        <h2>{member.name}</h2>
        <p>{member.biography}</p>
      </article>
      <img 
        src={urlFor(member.image).width(300).url()}
        alt={member.name}
        className="memberDetailImage"
      />
      <aside className="interests">
        <h2>Interests</h2>
        <ul>
          {member.interests?.map((interest, index) => (
            <li key={index}>
              {interest}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default MemberDetails;
