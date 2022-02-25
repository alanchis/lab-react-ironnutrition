import React from 'react'
import { Card, Col, Button } from 'antd';
import {useState} from 'react'
import foods from '../foods.json'
import handleChange from './AddFoodForm'

function FoodBox(props) {

  console.log(handleChange())

  const [id, setId] = useState("")
  
  const [foodList, setFoodList]= useState(foods)
  
  const deleteFood = (id) => {
  
    const filteredFood = foodList.filter((item) => {return item.id !== id})
  
    return StyleSheetList(filteredFood)
  }





    return (
      <Col span={8}>
        <Card
          title={props.food.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={props.food.image} height={60} alt="food" />
          <p>Calories: {props.food.calories}</p>
          <p>Servings: {props.food.servings}</p>
          <p>
            <b>Total Calories: {props.food.calories} * {props.food.servings} </b> kcal
          </p>
          <Button  type="primary"> Delete </Button>
        </Card>
      </Col>
    );
  }
  
  export default FoodBox;
  