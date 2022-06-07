import React,  { useEffect, useState, useRef }  from 'react';
import { postData } from "./service/InviteService"; 
import { validateEmail } from "./service/utils"; 

export default function Form({ setFormSubmitted }: any) {

  const name = useRef<HTMLInputElement>(null); 
  const email = useRef<HTMLInputElement>(null); 
  const guests = useRef<HTMLInputElement>(null); 
  const coming = useRef<HTMLInputElement>(null); 
  const comments = useRef<HTMLTextAreaElement>(null); 
  const [showThanks, setShowThanks] = useState(false); 
  const [error, setError] = useState(""); 
  const onSubmit = (e: any) => {

    e.preventDefault();  
    setError(""); 
    if (name?.current?.value == "") {
        setError("Please enter your name"); 
        return;
    }   
    if (!validateEmail(email?.current?.value)) {
        setError("Please enter a valid email"); 
        return;
    }
    if (Number.isInteger(parseInt(guests?.current?.value || "")) !== true) {
        setError("Please enter a valid number of guests"); 
        return;
    }    

    postData('https://adayinthelife.app/test-connect.php', { 
        name: name?.current?.value, 
        email: email?.current?.value,
        guests: parseInt(guests?.current?.value || "0"),
        iscoming: !coming?.current?.checked ? 1 : 0, 
        comments: comments?.current?.value
    }).then(
      (data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      }
    ).finally(()=> {
        setFormSubmitted(true); 
    }); 
  }; 

  return (
    <div>
        {error !== "" && 
        <div className="form-error">{error}</div>
        }
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
                <input ref={coming} id="coming" type="radio" name="test" value="true" defaultChecked/>
                <label htmlFor="coming" className="radio-label">Joyfully accept</label>
            </div>
            <div className="form-control">
                <input ref={coming} id="coming2" type="radio" name="test" value="false"/>
                <label htmlFor="coming2" className="radio-label">Sadly decline</label>
            </div>
            <div className="form-control">
                <label htmlFor="comments">Leave a note</label>
                <br />
                <textarea id="comments" ref={comments} name="comments" /> 
            </div>
            <div className="form-control">
                <button onClick={(e) => onSubmit(e)}>Submit RSVP</button>
            </div>
        </form>
    </div>
  );
}; 