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
        <Route path="react-components/main" element={<Main />} />
        <Route path="react-components/" element={<AboutUs />} />
        <Route path="react-components/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
