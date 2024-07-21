import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
    // making state of out app // input is set into that variable that is taken from the form..
       const [weight, setweight] = useState();
       const [height, setheight] = useState();
       const [Bmi, setBmi] = useState('');
       const [message, setmessage] = useState('');


  let calcBmi = (e)=>{
       e.preventDefault();

       if(weight === 0 || height === 0){
         alert("Please enter the valid Height and Weight.");
       }
       else{
        let bmi = weight /(height* height);
        setBmi(bmi.toFixed(1));


         if(bmi < 18.5){
            setmessage("You are Underweight.");
         }
         else if(bmi >= 18.5 && bmi <= 24.9){
            setmessage("Normal Weight.");
         }
         else if( bmi >= 25 && bmi <=29.9 ){
            setmessage("You are overweight.");
         }
         else if(bmi >= 30){
            setmessage("Obesity");
         }

       }
  }

  //reload

  let reload = () =>{
   window.location.reload();
  }



  return (
   <div className='container'>
    <div className="App">
       <h1>BMI Calculator </h1>
        <p>Body Mass Index (BMI) is a simple calculation used to assess whether a person has a healthy body weight for a given height.</p>
      <form onSubmit={calcBmi} > 
       <div>
          <label>Weight : </label>
          <input type='text' placeholder='Enter your weight(kg) ' value={weight}  onChange = {(e)=> setweight(e.target.value)}></input>
       </div>
       <div>
          <label>Height :  </label>
           <input type='text' placeholder='Enter your Height(m)' value={height}  onChange = {(e)=> setheight(e.target.value)}></input>
       </div>
       <div>
        <button className='btn' type='submit' >Submit </button>
        <button className='btn btn-outline' onClick={reload} type='submit'> Reload </button> 
       </div> 
        <div className='center'>
           <h3>Your BMI is : {Bmi}</h3>
           <p>{message}</p>
        </div>
      </form>
      <div>

      </div>
    </div>
    </div>
  );
}

export default App;
