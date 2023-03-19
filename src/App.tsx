import React from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import NotFound from "./NotFound";
import Main from "./Main";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<AboutUs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
