import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './style.css'

class Form extends Component {
  render() {
    return (
            <form className='form-block' onSubmit={this.props.getWeather}>
                <i className="fa-solid fa-location-dot"></i>
                <input
                    type="text"
                    name="city"
                    placeholder="Search"
                    className='input-field'
                />
                <button className='fa-solid fa-magnifying-glass'></button>
                <input
                    onClick={this.props.handleClick}
                    type="reset"
                    value='X'
                />
                <Helmet>
                    <script src="https://kit.fontawesome.com/7c8801c017.js" crossOrigin="anonymous"></script>
                </Helmet>
            </form>
    );
  }
}

export default Form;
