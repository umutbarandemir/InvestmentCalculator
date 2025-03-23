import { useState } from "react";
import Header from "./components/Header";
import ResultList from "./components/ResultList";
import UserInput from "./components/UserInput";

function App() {

    //instead of this approach, i can create 4 diffrent states to hold each values seperatly
    const[userValues,setUserValues]= useState({  initialInvestment:1000,
      annualInvestment:1200,
      expectedReturn:6,
      duration:10});

    const inputIsValid = userValues.duration >=1;
  
      function changeValue(inputIdentifier,newValue){
          setUserValues((oldValues)=>{
          return{
            ...oldValues,[inputIdentifier]:+newValue // newValue önündeki "+" string değerinin numeric value ya dönüşmesini sağlar
          };
        });
      }
    
  return (
    <>
    <Header></Header>
    <UserInput changeValue={changeValue} userValues={userValues}></UserInput>
    {inputIsValid ? <ResultList resultsValues={userValues}></ResultList>:<p className="center">PLEASE ENTER A VALID DATA!!</p>}
    </>
  )
}

export default App
