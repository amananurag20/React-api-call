import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Register from "./pages/Register";
import  Navbar from "./components/Navbar";
import Footer  from "./components/Footer";
import { lazy, Suspense, useState } from "react";
import MyContext from "./context/userContext";

const Login=lazy(()=>import("./pages/Login"))

const App = () => {

   const [rating, setRating]= useState(3.5);
  return (

    
    <div>
      
      <MyContext.Provider value={{rating,setRating}}>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Suspense fallback={<h1>Loading....</h1>}><Login /></Suspense>} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
      </MyContext.Provider>
     
      
    </div>
  );
};


export default App;
