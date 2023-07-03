import "App.css";
import Home from "Components/Home";
import { useState } from "react";
import Cart from "Components/Cart";
import Navigation from "Components/Nav";
import Header from "Components/Header";
import productdata from "Data/data";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const getData = productdata.filter((inp) => inp.id === item);
    setCartItems([...cartItems, ...getData]);
  };

  const removeItem = (item) => {
    console.log("remove item", item);
    const filteredData = cartItems.filter((obj) => obj.id !== item);
    console.log(filteredData);
    setCartItems([...filteredData]);
  };
  return (
    <>
      
      <Navigation cartItems={cartItems} />
      <Header />
      <Cart cartItems={cartItems} removeItem={removeItem} />
      <Home productdata={productdata} addItem={addItem} cartItems={cartItems} />
    </>
  );
}

export default App;