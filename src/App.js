import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { nanoid } from "nanoid"
import AddFoodForm from './component/AddFoodForm';
import FoodBox from './component/FoodBox';



function App() {

  
  
  const [foodList, setFoodList]= useState(foods)
  

  return (
    
    <>

      {/* <h1>Food List</h1>
      
      {
        foodList.map((food, index) => {

          return(
            <div>
              <p> {food.name} </p>
              <img src={food.image} width={100} />
            </div>
          )
        })
      } */}

      {/* <FoodBox food={ {
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1
      }} /> */}

   {/* {
      foods.map((arr,index)=>{
        return <FoodBox food={arr} />
      })
    } */}

    <AddFoodForm/>

    </>
   

  );
}

export default App;