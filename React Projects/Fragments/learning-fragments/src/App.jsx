import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
function App() {
  //let foodItems =[]
  //if-else-statement-->//if (foodItems.length === 0) {
  //return <h3>I need Protien MF!!!!</h3>;
  //Ternary Operators-->//let errorMessage = foodItems.length === 0? <h3>I need Protien MF!!!!</h3> : null
  // }
  let foodItems = ["Daal", "Isolate Protien", "cretien", "Fish Oil", "Milk"];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Items</h1>
        <FoodItems items={foodItems}></FoodItems>
        <ErrorMessage items={foodItems}></ErrorMessage>
      </Container>

      <Container>
        <p>Above lislted protiens is Good For muscle gain and health</p>
      </Container>
    </>
  );
}

export default App;
