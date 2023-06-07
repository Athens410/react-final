import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import './Weather.css';
import  axios from "axios";


export default function WeatherForecast(props){
let [loaded,setLoaded]= useState(false);
let [forecast,setForecast]= useState(null);
function handleResponse(response){

   
   setForecast(response.data.daily);
 setLoaded(true);

    
    
}

 if (loaded){


return(
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







 }else{


    
    


const apiKey ="c03face7caa58a9b7ffa9f52b7238a93";
let longitude = props.coord.lon;
    let latitude = props.coord.lat;
let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);









return "null";


    
}
}