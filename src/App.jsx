import React, { Component } from 'react';
import Header from "./components/header";
import Form from "./components/form";
import WeatherInfo from "./components/weather";
import CircularIndeterminate from "./components/loader";
import './App.css'

const API_KEY = '22bb777a7c074b4a96f72145221412';

class App extends Component {

  state = {
    city: undefined,
    country: undefined,
    temp_c: undefined,
    localtime: undefined,
    conditionText: undefined,
    conditionIcon: undefined,
    error: undefined,
    errorCatch: undefined,
    nameError: undefined,
    isLoading: false,
  }

  defaultStateFunction() {
    this.setState({
      city: undefined,
      country: undefined,
      temp_c: undefined,
      localtime: undefined,
      conditionText: undefined,
      conditionIcon: undefined,
    })
  }

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    if (city) {
      this.setState({isLoading: true})
        fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          })
          .then(data => {
            this.setState({
              city: data.location.name,
              country: data.location.country,
              temp_c: data.current.temp_c,
              localtime: data.location.localtime,
              conditionText: data.current.condition.text,
              conditionIcon: data.current.condition.icon,
              errorCatch: undefined,
              error: undefined,
              nameError: undefined,
            });
          })
          .catch(error => {
            if (error.message === '400') {
              this.defaultStateFunction()
              this.setState({
                error: undefined,
                errorCatch: undefined,
                nameError: 'Неверное название города'
              })
            } else {
              this.defaultStateFunction()
              this.setState({
                error: undefined,
                nameError: undefined,
                errorCatch: "Сервер недоступен" } )
            }})
          .finally(() => {
            this.setState({isLoading: false})
          })
    } else {
      this.defaultStateFunction()
      this.setState({
        error: 'Введите название города!',
        nameError: undefined,
        errorCatch: undefined
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Header />

        <Form
          getWeather={this.getWeather}
          handleClick={this.handleClick}
        />

        {this.state.isLoading  ? <CircularIndeterminate /> :
          <WeatherInfo
            city={this.state.city}
            country={this.state.country}
            temp_c={this.state.temp_c}
            localtime={this.state.localtime}
            error={this.state.error}
            conditionText={this.state.conditionText}
            conditionIcon={this.state.conditionIcon}
            errorCatch={this.state.errorCatch}
            nameError={this.state.nameError}
          />
        }
      </div>
    );
  }
}

export default App;
