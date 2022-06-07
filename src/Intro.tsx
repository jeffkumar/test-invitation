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
                <p>
                If you would like to make a reservation. We advise you to stay at the
                <a href="https://www.lakehill.pl/en/"> Lake Hill Resort and Spa</a>.
                </p>
                <Form setFormSubmitted={setFormSubmitted}>

                </Form>
            </div> 
        </div>
    );
};