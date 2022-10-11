import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Overview from "../Components/Overview";
import Bookticket from "../Components/Bookticket";

export const Index = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="overview/:id" element={<Overview />} />
        <Route path="bookticket/:id" element={<Bookticket />} />
      </Routes>
    </React.Fragment>
  );
};
export default Index;
