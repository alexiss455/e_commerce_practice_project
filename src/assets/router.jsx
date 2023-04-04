import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
function router() {
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
