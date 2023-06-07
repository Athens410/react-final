import React from "react";
import WeatherIcon from "./WeatherIcon";
import './Weather.css';
import  Axios from "axios";


export default function WeatherForecast(){

function handleResponse(response){

    console.log(response.data);

          setWeatherData({
            ready: true,
             temperature: response.data.main.temp,
             humidity: response.data.main.humidity,
             description: response.data.weather[0].description,
             date: new Date(response.data.dt * 1000),
             icon: response.data.weather[0].icon,
             wind: response.data.wind.speed,
             city: response.data.name



          });


    
    
}
 const apiKey ="c03face7caa58a9b7ffa9f52b7238a93";
 let latitude = 43.6;
 let longitude = 79.3;
let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
axios.get(apiUrl).then(handleResponse);




    return (
      <div className="WeatherForecast">
        <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thur</div>
           <WeatherIcon code="01d"  size={42}/>
            <div className="WeatherForecast-temperatures"> 
            <span className="WeatherForecast-temperature-max">19° </span>
           
           
            <span className="WeatherForecast-temperature-min"> 
            
            10°
             </span>
             

            
            
            
            
            
            
            

            
            
            
            
            
            
             </div>
               


         </div>
            </div>










      </div>













    );
}