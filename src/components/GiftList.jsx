import React from 'react';

const GiftList = function () {
  const gifts = ['Mancuerna 10kg', 'Mancuerna 15kg', 'Mancuerna 20kg'];
  const giftList = gifts.map((gift) => <li>{gift}</li>);
  return (
    <div>
      <ul>{giftList}</ul>
    </div>
  );
};

export default GiftList;
