import React from 'react';

const submitButton = () => {
  document.getElementById('btn-add').addEventListener('click', () => {
    document.querySelector('ul').innerHTML = <li />;
  });
};
const Form = function () {
  return (
    <div>
      <form>
        <input placeholder="Agregar un regalo" />
        <button id="btn-add">Agregar</button>
      </form>
    </div>
  );
};

export default Form;
