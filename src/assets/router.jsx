import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
function router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Home />} />
      <Route path="/men" element={<Home />} />
      <Route path="/women" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/contact" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default router;
