import React from 'react';

const Form = (props) => {

  return (
    <>
      <form onSubmit={props.CITY}>
        <input type="text" name='city' placeholder='Введите название города'/>
        <button>Получить данные</button>
      </form>
    </>
  );
};

export default Form;