import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import NotFound from "./components/NotFound";
import Main from "./components/Main";
import Forms from "./components/Forms";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
