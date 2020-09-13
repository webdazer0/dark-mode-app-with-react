import React from 'react';
import './cardSmall.css';

function CardSmall({ titleViews, social, views, growth, symbol }) {

    const iconPath = `images/icon-${social}.svg`;
    const iconGrowth = `images/icon-${symbol}.svg`;
    const textGrowth = (symbol === 'down') ? 'card-small-percentage is-danger' : 'card-small-percentage';

    return (
        <div className="card-small">
          <p className="card-small-views">{titleViews}</p>
          <p className="card-small-icon">
            <img src={iconPath} alt="" />
          </p>
          <p className="card-small-number">{views}</p>
          <p className={textGrowth}>
            <span>
              <img src={iconGrowth} alt="" />
              {growth}%
            </span>
          </p>
        </div>
    );
}

export default CardSmall;