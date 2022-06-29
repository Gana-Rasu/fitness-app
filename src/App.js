import React from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';

import Home from "./Pages/Home";
import Excercisedetail from "./Pages/Excercisedetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Box from '@mui/material/Box';

function App() {
  return (

    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto"   >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/excercise:id" element={<Excercisedetail/>} />
      </Routes>
      <Footer/>
      </Box>
  );
}

export default App;
