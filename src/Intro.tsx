import Form from "./Form"; 
import { Clocks } from "./Clock"; 

export default function Intro() {
    return (
        <main>
            <h1>RSVP</h1> 
            
            <div>
                <p>
                    Jeff and Anastasiia would like to invite you to join us in Jelenia
                    Gora, Poland on July 24, 2022.
                </p>  
                <Clocks />
                <Form /> 
            </div> 
        </main> 
    );
};