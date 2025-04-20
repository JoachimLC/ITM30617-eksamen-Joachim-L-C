import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ id, image, name, email }) => (
  <NavLink to={`/member/${id}`} className="card">
    <figure>
      <img
        src={image}
        alt={name}
        className="memberCardImage"
      />
      <figcaption className="cardcontent">
        <h4>{name}</h4>
        <p>{email}</p>
      </figcaption>
    </figure>
  </NavLink>
);

export default Card;
