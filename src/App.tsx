import React,  { useState }  from 'react';
import Intro  from "./Intro"; 
import ThankYou  from "./ThankYou"; 
import './App.css';  
 
export default function App() {

    const [formSubmitted, setFormSubmitted] = useState(false);  

    return (
        <main className={formSubmitted ? "thankyou" : null}>  
            {!formSubmitted && <Intro setFormSubmitted={setFormSubmitted}></Intro>}
            {formSubmitted && <ThankYou></ThankYou>}  
        </main>
    );
}
