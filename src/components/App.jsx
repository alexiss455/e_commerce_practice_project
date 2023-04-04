import React, { useState } from "react";
import Header from "../assets/header";
import Router from "../assets/router";
function App() {
  const [cout, setCount] = useState(0);
  const [store, setStore] = useState(0);
  return (
    <>
      <Header count={store} />
      <div className="min-h-screen pt-44 max-md:pt-24 pb-10 ">
      <Router
        count={cout}
        setCount={setCount}
        store={store}
        setStore={setStore}
      />
      </div>
 
    </>
  );
}
export default App;
