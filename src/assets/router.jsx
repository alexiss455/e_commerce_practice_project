import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";

function withSharedProps(Component, sharedProps) {
  return function(props) {
    return <Component {...props} {...sharedProps} />;
  }
}

function router(props) {
  const sharedProps = {
    count: props.count,
    setCount: props.setCount,
    store: props.store,
    setStore: props.setStore
  };

  const HomeWithSharedProps = withSharedProps(Home, sharedProps);

  return (
    <Routes>
      <Route path="/" element={<HomeWithSharedProps />} />
      <Route path="/collection" element={<HomeWithSharedProps />} />
      <Route path="/men" element={<HomeWithSharedProps />} />
      <Route path="/women" element={<HomeWithSharedProps />} />
      <Route path="/about" element={<HomeWithSharedProps />} />
      <Route path="/contact" element={<HomeWithSharedProps />} />
    </Routes>
  );
}

export default router;
