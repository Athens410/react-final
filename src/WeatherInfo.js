import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){










return(

 <div className="WeatherInfo">
               

 <h1>{props.data.city}</h1>
        <ul class="week">
         <li>
         <FormattedDate date={props.data.date}  />
         </li>
         <li className="text-capitalize">
         {props.data.description}
         </li>
        

        </ul>
         <div className="row">
           <div className="col-6">
          
            
              <WeatherTemperature celsius={props.data.temperature}  />
    
                 <WeatherIcon code={props.data.icon} size={88} />
                                      
                 
                {""} {""}
                
               
                   
           </div>
           
           
           
           
           
           <div className="col-6">
            <ul class="week">
             
              <li>
            Humidity:{props.data.humidity}%
              </li>
              <li>
            Wind:{props.data.wind}km/h
              </li>


            </ul>

           </div>



         </div>






















 </div>















);







}