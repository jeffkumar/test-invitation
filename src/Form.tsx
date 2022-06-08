import React, { useState, useRef }  from 'react';
import { useNavigate } from "react-router-dom"; 
import { postData } from "./service/InviteService"; 
import { validateEmail } from "./service/utils"; 

export default function Form() {
  const navigate = useNavigate(); 
  const name = useRef<HTMLInputElement>(null); 
  const email = useRef<HTMLInputElement>(null); 
  const guests = useRef<HTMLSelectElement>(null); 
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
       navigate("/thankyou"); 
    }); 
  }; 

  return (
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
                <label htmlFor="guests">Number of guests</label>
                <select ref={guests} id="guests" name="guests" style={{ width: '46px' }} placeholder="" >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select> 
            </div>
            <div className="form-control">
                <label>Response</label>
            </div>
            <div className="form-control radio">
                <input ref={coming} id="coming" type="radio" name="test" value="true" defaultChecked/>
                <label htmlFor="coming" className="radio-label">Joyfully accept</label>
                <input ref={coming} id="coming2" type="radio" name="test" value="false"/>
                <label htmlFor="coming2" className="radio-label">Sadly decline</label>
            </div> 
            <div className="form-control note">
                <label htmlFor="comments">Leave a note</label> 
                <textarea id="comments" ref={comments} name="comments" /> 
            </div>
            {error !== "" && 
                <div className="form-error">{error}</div>
            }
            <div className="form-control">
                <button onClick={(e) => onSubmit(e)}>Submit RSVP</button>
            </div>
        </form>
    </div>
  );
}; 