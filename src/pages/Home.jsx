import React, { useState } from "react";
import ModalBody from "../components/home_comps/ModalBody";
import Navbar from "../components/home_comps/Navbar";
import Body from "../components/home_comps/Body";
import LowerBody from "../components/home_comps/LowerBody";
// home page
const Home = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <LowerBody />

      <ModalBody onClose={console.log("sim ")} />
    </div>
  );
};

export default Home;
