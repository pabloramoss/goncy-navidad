import React from 'react';
import React, {useState} from 'react';
import './GiftList.css';

const gifts = ['Mancuerna 10kg', 'Mancuerna 15kg', 'Mancuerna 20kg'];
// Custom method that executes when we submit the form
state = gifts;
const submit = (e) => {
  e.preventDefault(); // When submit the form, page will not refresh
  const newGift = 'test';

};
const GiftList = function () {
  const giftList = gifts.map((gift, index) => <li key={index}>{gift}</li>);
  return (
    <div className="Notebook">
      <img src="../../public/img-notebook.png" alt="" />
        <form onSubmit={submit}>
            <input type="text" placeholder="Regalo" id="form-input" />
            <button type="submit" id="form-button">Agregar</button>
        </form>
      <div className="NotebookList">
        <h1 className="ListItem">REGALOS</h1>
        <ul>{giftList}</ul>

      </div>
    </div>
  );
};

export default GiftList;
