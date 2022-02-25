import React, { useState } from 'react'
import foods from '.././foods.json';
import { nanoid } from "nanoid"
import FoodBox from './FoodBox';



export default function AddFoodForm() {

  const [newFood, setNewFood] = useState({
    name:'',
    image:'',
    calories:'',
    servings:''
  })
  const [foodList, setFoodList]= useState(foods)
  const [error, setError] = useState("")
 
  const handleChange = (event) => {
		setNewFood({
			...newFood, // spread operator ES6+ - Object Assign
			id: nanoid(),
		 	[event.target.name]: event.target.value
		})
	}

  const handleSubmit = (event) => {
		
		event.preventDefault() // DETENER LA RECARGA DE PÁGINA

		if(!newFood.name || !newFood.image || !newFood.calories || !newFood.servings) {

			setError("Existe un campo vacío. Por favor, verifica nuevamente.")

			return
		}
		setFoodList([
			newFood,
			...foodList
		])

		setNewFood({
      name:'',
      image:'',
      calories:'',
      servings:''
		})

		setError("")

	}

  return (

    <>

    <form onSubmit={(evt) =>{handleSubmit(evt)}}>

    <label>Name</label>
    <input 
      name="name"
      value={newFood.name}
      onChange={ evt => { handleChange(evt) }}
    />
    <label>Image</label>
    <input 
      name="image"
      value={newFood.image}
      onChange={ evt => { handleChange(evt) }}
    />
    <label>Calories</label>
    <input 
      name="calories"
      value={newFood.calories}
      onChange={ evt => { handleChange(evt) }}
    />
    <label>Serving</label>
    <input 
      name="servings"
      value={newFood.servings}
      onChange={ evt => { handleChange(evt) }}
    />
    <button type="submit">Crear platillo</button>

  </form>
    {

      foodList.map((arr,index)=>{
      return (
          <div key={index}>
          <FoodBox food={arr} />
          </div>

              )
        
      })



    }


  </>
 

);
}