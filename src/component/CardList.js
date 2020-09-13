import React from 'react';
import Card from './Card';
import './cardList.css';

const cardListData = [
  {
    social: 'facebook',
    name: 'MarkZuckerberg',
    followers: '1483',
    newFollowers: '32',
    _id: '1'
  },
  {
    social: 'twitter',
    name: 'ElonMusk',
    followers: '28k',
    newFollowers: '12',
    _id: '2'
  },
  {
    social: 'instagram',
    name: 'JeffBezos',
    followers: '6k',
    newFollowers: '12',
    _id: '3'
  },
  {
    social: 'youtube',
    name: 'JackMa',
    followers: '12k',
    newFollowers: '12',
    _id: '4'
  }
];

function CardList() {
    return (
      <section className="top-cards">
          <div className="wrapper">
            <div className="grid">
              {
                cardListData.map((cardData) => {
                  return (<Card key={cardData._id}  {...cardData}  />)
                })
              }
        
            </div>
          </div>
        </section>
    );
}

export default CardList;