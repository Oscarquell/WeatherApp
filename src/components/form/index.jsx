import React, { Component } from 'react';
import './style.css'

class Form extends Component {
  render() {
    return (
      <form className='form-block' onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="Введите город"/>
        <button>Получить данные</button>
      </form>
    );
  }
}

export default Form;
