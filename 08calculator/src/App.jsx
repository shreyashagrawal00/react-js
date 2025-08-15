import styles from "./App.module.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useState } from "react";


function App() {

  const [calValue,setCalValue]=useState("");
  
  const onButtonClick=(buttonText)=>{

    console.log("clicked");
    if(buttonText==="C"){
      setCalValue("");
    }
    else if(buttonText==="="){
      const result = eval(calValue);
      setCalValue(result);
    }
    else if(buttonText==="DEL"){
      setCalValue(calValue.slice(0,-1));
    }
    else{
      const newDisplayValue = calValue + buttonText;
      setCalValue(newDisplayValue);
    }

  };


  
  return (
    <>
    <center>
    <div className={styles.calculator} >
      <Display displayValue={calValue}/>
      <Buttons onButtonClick={onButtonClick}/>
    </div>
    </center>
    </>
  )
}

export default App
