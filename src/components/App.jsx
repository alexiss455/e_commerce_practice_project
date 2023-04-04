import React, { useState } from "react";
import Header from "../assets/header";
import Router from "../assets/router";
function App() {
  const [cout, setCount] = useState(0);
  const [store, setStore] = useState(0);
  return (
    <>
      <Header count={store} />
      <Router
        count={cout}
        setCount={setCount}
        store={store}
        setStore={setStore}
      />
    </>
  );
}
export default App;
