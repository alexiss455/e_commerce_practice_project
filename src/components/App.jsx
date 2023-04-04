
import React,{ useState } from "react";
import Header from "../assets/header";
import Router from "../assets/router";
function App() {
  const [cout, setCount] = useState(0);
  const [store, setStore] = useState(0);


  return (
    <div className="max-w-screen-xl mx-auto max-md:px-6">
        <Header 
          count = {store}
        />
        <Router 
          count = {cout}
          setCount = {setCount}
          store = {store}
          setStore = {setStore}
        />
    </div>
  );
}
export default App;
