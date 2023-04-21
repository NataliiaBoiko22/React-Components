import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Pages/Header/Header";
import React from "react";
import { Main } from "./components/Pages/Main/Main";
import About from "./components/Pages/AboutUs/AboutUs";
import FormPage from "./components/Pages/FormPage/FormPage";
import NotFound from "./components/Pages/NotFound/NotFound";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<FormPage />} />
      </Route>
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};

export default App;
