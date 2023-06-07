import React from "react";
import WeatherIcon from "./WeatherIcon";
import './Weather.css';
import  axios from "axios";


export default function WeatherForecast(props){

function handleResponse(response){

    console.log(response.data);



    
    
}
 const apiKey ="c03face7caa58a9b7ffa9f52b7238a93";
let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
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