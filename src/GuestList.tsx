 

import React, { useState, useEffect }  from 'react'; 
 

 
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