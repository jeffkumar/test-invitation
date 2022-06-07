import Form from "./Form";
export default function Intro({setFormSubmitted}: any) {
    return (
        <div>
            <h1>RSVP</h1> 
            <div>
                <p>
                Jeff and Anastasiia would like to invite you to join us in Jelenia
                Gora, Poland on July 24, 2022.
                </p> 
                <Form setFormSubmitted={setFormSubmitted} />
            </div> 
        </div>
    );
};