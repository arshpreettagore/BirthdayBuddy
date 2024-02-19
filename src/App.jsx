import React, { useState } from "react";
import data from "./data.js"; // dont need to mention extention unless css
import List from "./List.jsx";

function App() {
  //let len = 5; 
  const [len,setLen] = useState(5); 
  // function increment() {
  //   setLen(len+1);  
  //   console.log(len); 
  // }
  const[people, setPeople] = useState(data);
  function clearFunction(){
    setPeople([]); 
  }
  return (
    <main>
      <section className ="container">
        <h1>{people.length} Birthdays Today</h1>
         <List people={people}/> 
         <button onClick={clearFunction}>clear All
         </button>
      </section>
    </main>
  );
}

export default App;
