import React,  { useEffect, useState, useRef }  from 'react';
import logo from './logo.svg';
import './App.css';
import { postData } from "./service/InviteService"; 

 
export default function App() {

  const name = useRef(null); 
  const email = useRef(null); 
  const guests = useRef(null); 
  const coming = useRef(null); 
  const [showThanks, setShowThanks] = useState(false); 

  const onSubmit = (e: any) => {
    e.preventDefault();  
    postData('https://adayinthelife.app/test-connect.php', { 
        name: name.current.value, 
        email: email.current.value,
        guests: guests.current.value,
        iscoming: !coming.current.checked ? 1 : 0, 
        comments: ""
    }).then(
      (data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      }
    ).finally(()=>{
        setShowThanks(true); 
    }); 
  }; 

  if (showThanks) {
    return (
    <main>
        <h3>RSVP</h3>
        <p>Thank you for your response</p>
        <p> 
          Please check out <a href="https://www.lakehill.pl/en/"> Lake Hill Resort and Spa</a>
        </p>
    </main>); 
  }

  return (
    <main> 
      <h3>RSVP</h3>
      
      <div>
        <p>
          Jeff and Anastasiia would like to invite you to join us in Jelenia
          Gora, Poland on July 24, 2022.
        </p>
        <p>
          If you would like to make a reservation. We advise you to stay at the
          <a href="https://www.lakehill.pl/en/"> Lake Hill Resort and Spa</a>.
        </p>
      </div>
      <div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input ref={name}  id="name" type="text" placeholder="your name" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input ref={email} id="email" type="email"  placeholder="your email" />
          </div>
          <div className="form-control">
            <label htmlFor="guests">Number of guests coming</label>
            <input ref={guests} id="guests" name="guests" style={{ width: '32px' }} placeholder=""  />
          </div>
          <div className="form-control">
            <input ref={coming} id="coming" type="radio" name="test" value="true"/>
            <label htmlFor="coming">Joyfully accept</label>
          </div>
          <div>
            <input ref={coming} id="coming2" type="radio" name="test" value="false"/>
            <label htmlFor="coming2">Sadly decline</label>
          </div>
          <div className="form-control">
            <button onClick={(e) => onSubmit(e)}>RSVP</button>
          </div>
        </form>
      </div>
    </main>
  );
}
