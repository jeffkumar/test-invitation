 

import React, { useState, useEffect }  from 'react'; 

const set = [
    {
    id: "110",
    name: "Sunita Holloway",
    email: "sunihollow@gmail.com",
    guests: "2",
    iscoming: "1",
    comments: ""
    },
    {
    id: "113",
    name: "Jus",
    email: "juskumar@gmail.com",
    guests: "2",
    iscoming: "1",
    comments: "Not sure if 1 or 2 people"
    },
    {
    id: "116",
    name: "Jonathan Holloway",
    email: "jdholloway@outlook.com",
    guests: "2",
    iscoming: "1",
    comments: "The formated text boxes are a nice touch. It looks pretty good on mobile too"
    },
    {
    id: "127",
    name: "Jeff",
    email: "jeffkumar.aw@gmail.com",
    guests: "2",
    iscoming: "1",
    comments: ""
    },
    {
    id: "128",
    name: "Anastasiia Soroka",
    email: "pro100sontse@gmail.com",
    guests: "1",
    iscoming: "1",
    comments: "❤"
    },
    {
    id: "130",
    name: "Jasbir Kumar",
    email: "jasbir.kumar@gmail.com",
    guests: "2",
    iscoming: "1",
    comments: "Looking forward to a great day !!!!"
    }
    ];

 
export default function GuestList() {
  
    const [list, setList] = useState<any>([]); 

    useEffect(() => {
        fetch('https://adayinthelife.app/list.php')
            .then(data => data.json())
            .then((data) => {
                setList(data); 
                console.log(data); 
            }
        );
        setList(set);
    })
    

  return (
    <main> 
        <h1>Guest List</h1>
        <section> 
            <header>
                <div className="col">Name</div>
                <div className="col fullscreen">Email</div>
                <div className="col half">Guests</div>
                <div className="col half">Coming</div>
                <div className="col fullscreen">Comments</div>
            </header>
            {list.map((item: any) => {
                return (
                    <div className="row"> 
                        <div className="col">{item.name}</div>
                        <div className="col fullscreen">{item.email}</div>
                        <div className="col half">{item.guests}</div>
                        <div className="col half">{item.iscoming ? "yes" : "no"}</div>
                        <div className="col fullscreen">{item.comments}</div>
                    </div>
                );
            })}
        </section>
         
    </main>
  );
}; 