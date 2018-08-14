import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = '39d833fac624243cce4b4b2442ec49ba';


class App extends React.Component{

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    longitud: undefined,
    latitud: undefined
  }


  getWeather = async (e) => {

    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const API_CALL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await API_CALL.json();
    if (city && country){
      // console.log(data);
      this.setState({
        temperature: data.main.temp,
        pressure: data.main.pressure,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        longitud: data.coord.lon,
        latitud: data.coord.lat,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        pressure: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        longitud: undefined,
        latitud: undefined,
        error: "Please enter the values"
    })
  }
}

    render(){
      return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    pressure={this.state.pressure}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    longitud={this.state.longitud}
                    latitud={this.state.latitud}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};




export default App;

