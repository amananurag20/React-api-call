import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { Link } from "react-router-dom";
import MyContext from "../context/userContext";
const Home = () => {
    const data=useContext(MyContext);


    console.log(data)

 
  return (
    <>
     {data.rating}
    </>
  );
};

export default Home;
