import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Investimento from "./Area Investimento";
import Extrato from "./Extratos Bancarios";
import Login from "./Login";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/investimentos" element={<Investimento/>}/>
        <Route path="/extrato" element={<Extrato/>}/>
      </Routes>
    </BrowserRouter>
  );
};
