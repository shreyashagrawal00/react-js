import { useState } from 'react';
import './App.css';
import FoodInput from './components/FoodInput';
import FoodItems from './components/FoodItems';
import Error from './components/Error';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  
  let [FoodItem,setFoodItem]=useState([])

  const onKeyDown=(e)=>{
    if(e.key==="Enter"){
      let newFood=e.target.value;
      e.target.value="";
      let newItems=[...FoodItem,newFood];
      setFoodItem(newItems);
    }
  }
  return (
    <div className="container mt-4 div">
      <h1 className="mb-4">Healthy Foods.</h1>
      <FoodInput handleKeyDown={onKeyDown}/>
      <Error FoodItem={FoodItem}></Error>
      <FoodItems FoodItem={FoodItem}></FoodItems>
    </div>
  );
}

export default App;
