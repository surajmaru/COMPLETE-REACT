import topImg from "./assets/investment-calculator-logo.png";
import Inputs from "./Components/Inputs.jsx";
import { useState } from "react";
import Results from "./Components/Results.jsx";

function App() {
  const [userInput,setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 2000,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(inputIdentifier ,newValue){
        setUserInput((prevUserInput) => {
            return{
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        });
    }

  return (
    <>
    <header id="header">
      <img src={topImg} alt="investment" />
      <h1>React Investment Calculator</h1>
    </header>

    <Inputs onChange={handleChange} userInput={userInput}/>

    <Results input={userInput}/>
    
    </>
  )
}

export default App
