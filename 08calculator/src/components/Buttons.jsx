import styles from "./Buttons.module.css";
import { RiDeleteBack2Line } from "react-icons/ri";

function Buttons({onButtonClick}){
    const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "0",
    "9",
    ".",
    "=",
    "DEL"
  ];
    return(
    <>
    <div className={styles.buttonContainer}>
        {buttonNames.map((button)=>(
            <button key={button} className={styles.Button} 
            onClick={()=>onButtonClick(button)}
            > {button} </button>

        ))}
    </div>

    
    </>
    );
}

export default Buttons;