import Form from "./Form"; 
import { Clocks } from "./Clock"; 

export default function Intro() {
    return (
        <main>
            <h1>RSVP</h1>  
            <div className="intro-section">
                <div style={{maxWidth: "50%"}}>
                    <p>
                        Jeff and Anastasiia would like to invite you to join us in Jelenia
                        Gora, Poland on July 25, 2022.
                    </p>  
                </div> 
                <Clocks /> 
            </div> 
            <Form /> 
        </main> 
    );
};