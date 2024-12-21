import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NeatEase from "./components/NeatEase";
import Navibar from "./components/Navibar";
import List from "./components/List";
import Add from "./components/Add";

const App = () => {
  return (
      <Navibar />
      <Routes>
        <Route path="/" element={<NeatEase />}/>
        <Route path="/List" element={<List />} />
        <Route path="/Add" element={<Add />} />
      </Routes>
  )
}

export default App;
