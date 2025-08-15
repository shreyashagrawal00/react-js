import styles from "./FoodInput.module.css";
function FoodInput({handleKeyDown}){
    return(
        <>
            <input
            type="text"
            placeholder="Enter Anything."
            className={styles.foodinput}
            onKeyDown={handleKeyDown}
            />
        </>
    );
};

export default FoodInput;