import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import NotFound from "./components/Pages/NotFound/NotFound";
import Main from "./components/Pages/Main/Main";
import FormPage from "./components/Pages/FormPage/FormPage";
// import Header from "components/Pages/Header/Header";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        {/* <Header /> */}
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/forms" element={<FormPage />} />
      </Routes>
    </>
  );
};

export default App;
