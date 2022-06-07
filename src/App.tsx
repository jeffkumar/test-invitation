import React,  { useState }  from 'react';
import Form  from "./Form"; 
import './App.css'; 
 
export default function App() {

    const [formSubmitted, setFormSubmitted] = useState(false); 

    if (formSubmitted) {
        return (
            <main>
                <h1>RSVP</h1>
                <p>Thank you for your response</p>
                <p> 
                Please check out <a href="https://www.lakehill.pl/en/"> Lake Hill Resort and Spa</a>
                </p>
            </main>
        ); 
    }

    return (
        <main> 
            <h1>RSVP</h1> 
            <div>
                <p>
                Jeff and Anastasiia would like to invite you to join us in Jelenia
                Gora, Poland on July 24, 2022.
                </p>
                <p>
                If you would like to make a reservation. We advise you to stay at the
                <a href="https://www.lakehill.pl/en/"> Lake Hill Resort and Spa</a>.
                </p>
                <Form setFormSubmitted={setFormSubmitted}>

                </Form>
            </div> 
        </main>
    );
}
