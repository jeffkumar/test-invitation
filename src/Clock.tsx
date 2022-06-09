 

import React, { useState, useRef, useEffect }  from 'react';  
import { text } from 'stream/consumers';
import "./Clock.css";

const hours = [
    {hour: 3, name: "three"}, 
    {hour: 6, name: "six"},
    {hour: 9, name: "nine"},
    {hour: 12, name: "twelve"}
]; 

const changeTimezone = (date: Date, timezone: string) => {

    // suppose the date is 12:00 UTC
    var invdate = new Date(date.toLocaleString('en-US', {
      timeZone: timezone
    })); 
    var diff = date.getTime() - invdate.getTime(); 
    return new Date(date.getTime() - diff);   
};
 
export function Clocks() {
   
    const [secondsHand, setSecondsHand] = useState<number>(); 
    const [hoursHand, setHoursHand] = useState<number>(); 
    const [minutesHand, setMinutesHand] = useState<number>(); 
    const [timezonne, setTimezone] = useState<string>(); 
    const [handsText, setHandsText ] = useState<string>("Join Us"); 
  

    useEffect(() => {
        const time = setTimeout(() => {
            let date = new Date();  
            let seconds = date.getSeconds();
            const miliseconds = date.getMilliseconds();
            seconds = seconds + miliseconds / 1000;
            const minutes = date.getMinutes() + seconds / 60; 
            const hours = date.getHours() + minutes / 60; 
            setSecondsHand((seconds  * (360/60) % 360) - 90);   
            setHoursHand((hours % 12 * (360/12) % 360) - 90);   
            setMinutesHand((minutes * (360/60) % 360) - 90);  
            
        }, 100);  
        return () => clearTimeout(time);
    }); 
    
  return (
    <div className="clock">  
        <div className="markers">
            {hours.map((h) => {
                const { hour, name } = h; 
                return <div className={name}>{hour}</div>
            })}
        </div> 
        <div className="center"></div>
        <div className="hands">
            <div className="hour" style={{transform: `rotate(${hoursHand}deg)` }}>Jeff</div>
            <div className="minute" style={{transform: `rotate(${minutesHand}deg)` }}>{handsText}</div>
            <div className="second" style={{transform: `rotate(${secondsHand}deg)` }}>Anastasiia</div>
        </div>
    </div>
  );
}; 