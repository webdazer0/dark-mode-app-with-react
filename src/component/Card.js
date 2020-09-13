import React from 'react';
import './card.css';

function Card({social, name, followers, newFollowers }) {

    const socialClass = `card ${social}`;
    const imagePath = `images/icon-${social}.svg`;
    
    return (
        <article className={socialClass}>
          <p className="card-title">
            <img src={imagePath} alt="" />
            @{name}
          </p>
          <p className="card-followers">
            <span className="card-followers-number">{followers}</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p className="card-today">
            <img src="images/icon-up.svg" alt="" />
            {newFollowers} Today
          </p>
        </article>
    );
}

export default Card;