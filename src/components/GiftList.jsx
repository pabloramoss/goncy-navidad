import React from 'react';
import './GiftList.css';

const gifts = ['Mancuerna 10kg', 'Mancuerna 15kg', 'Mancuerna 20kg'];
const GiftList = function () {
  const giftList = gifts.map((gift, index) => <li key={index}>{gift}</li>);
  return (
    <div className="Notebook">
      <img src="../../public/img-notebook.png" alt="" />
      <div className="NotebookList">
        <h1 className="ListItem">REGALOS</h1>
        <ul>{giftList}</ul>
      </div>
    </div>
  );
};

export default GiftList;
