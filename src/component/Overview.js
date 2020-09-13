import React from 'react';
import CardSmall from './CardSmall';
import './overview.css';

const socialData = [
  {
    titleViews: 'Page Views', 
    social: 'facebook',
    views: '87', 
    growth: '3',
    symbol: 'up',
    _id: '1'
  },
  {
    titleViews: 'Likes', 
    social: 'facebook',
    views: '52', 
    growth: '2',
    symbol: 'down',
    _id: '2'
  },
  {
    titleViews: 'Likes', 
    social: 'instagram',
    views: '5462', 
    growth: '2257',
    symbol: 'up',
    _id: '3'
  },
  {
    titleViews: 'Profile Views', 
    social: 'instagram',
    views: '52k', 
    growth: '1375',
    symbol: 'up',
    _id: '4'
  },
  {
    titleViews: 'Retweets', 
    social: 'twitter',
    views: '117', 
    growth: '303',
    symbol: 'up',
    _id: '5'
  },
  {
    titleViews: 'Likes', 
    social: 'twitter',
    views: '507', 
    growth: '553',
    symbol: 'up',
    _id: '6'
  },
  {
    titleViews: 'Likes', 
    social: 'youtube',
    views: '107', 
    growth: '19',
    symbol: 'down',
    _id: '7'
  },
  {
    titleViews: 'Total Views', 
    social: 'youtube',
    views: '1407', 
    growth: '12',
    symbol: 'down',
    _id: '8'
  }
];

function Overview() {
    return (
        <section className="overview">
          <div className="wrapper">
            <h2>Overview - Today</h2>
            <div className="grid">
              {
                socialData.map( el => <CardSmall key={el._id} {...el} /> )
              }
            </div>
          </div>
        </section>
    );
}

export default Overview;