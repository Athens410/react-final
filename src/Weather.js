import './App.css';
import axios from 'axios';
import React, {useState} from "react";
import {InfinitySpin}  from  'react-loader-spinner';
import {Oval} from 'react-loader-spinner';
import './Weather.css';
import WeatherForecast from './WeatherForecast';

import WeatherInfo from './WeatherInfo';


export default function Weather (props){

const [weatherData, setWeatherData]= useState({ready: false});
const [city, setCity] = useState(props.defaultCity);

function handleResponse(response){

    console.log(response.data);

          setWeatherData({
            ready: true,
            coord:response.data.coord,
             temperature: response.data.main.temp,
             humidity: response.data.main.humidity,
             description: response.data.weather[0].description,
             date: new Date(response.data.dt * 1000),
             icon: response.data.weather[0].icon,
             wind: response.data.wind.speed,
             city: response.data.name



          });


    
    
}


function Search (){


 const apiKey ="c03face7caa58a9b7ffa9f52b7238a93";
 
 let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);



}








function handleSubmit(event){


  event.preventDefault();
  Search();
}
function handleCityChange (event) {

setCity(event.target.value);




}


if(weatherData.ready){
    return(
        <div className="line">

            <h1 className="glowing-text">SheCodes React Weather Search Engine</h1>
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="type a city.." className="form-contorl" class="back" autoFocus="on" onChange={handleCityChange}/>
            <input type="submit" value="search" class="button" />
            { city && (
  <div className="loader-spinner">
    <InfinitySpin width={200} color="aqua" />
   
  </div>
)}
              
        </form>
      
   
        <WeatherInfo data ={weatherData} />
          
        <WeatherForecast coord={weatherData.coord} />
       

             
             
             
             </div>

    );
}else {
  Search();
  return (<Oval
  height={100}
  width={100}
  color="white"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="aqua"
  strokeWidth={5}
  strokeWidthSecondary={3}

/>);
}








}






