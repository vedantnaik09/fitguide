import React from "react";
import back from "../resources/muscle_back1.jpg";
import Navbar from "./Navbar";
import MuscleGroups from "./MuscleGroups";

function Muscle() {
  return (
    <div className=" min-h-[100vh] flex" style={{backgroundImage:`url(${back})`}}>
      <div className="top-0 w-full">
        <Navbar></Navbar>
        <MuscleGroups></MuscleGroups>
      </div>
    </div>
  );
}

export default Muscle;
