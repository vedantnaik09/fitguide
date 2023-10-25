import React, { useState } from "react";
import pulldown from "../resources/pulldown.png";
import pullup from "../resources/pullup.png";
import jog from "../resources/jog.gif";
import { groups } from "../muscles";


function MuscleGroups() {
  const [show, setShow] = useState("");
  const [pull, setPull] = useState(pulldown);
  let toggleHeight = () => {
    if (show == "show") {
      setShow("");
      setPull(pulldown);
    } else {
      setShow("show");
      setPull(pullup);
    }
    console.log("clicked");
  };
  return (
    <div className="mt-20 mb-10">
      <div className={`text-white w-[80%] m-auto ${show} font-montserrat` }>
        <div className="py-5 bg-red-400 flex justify-between p-5 rounded-2xl" style={{backgroundImage:`url(${jog})`}}>
          <h1 className="inline-block text-lg font-bold">Push Workout</h1>
          <button className="" onClick={toggleHeight}>
            +
          </button>
        </div>
        <div className={`bg-[#08070e] text-white content`}>
          <p>
          A "pull" muscle group typically refers to the muscles that are primarily involved in the action of pulling objects or resisting force in a pulling motion. These muscles are usually the antagonists of the "push" muscle groups. The major pull muscle groups include:
          </p>
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/WNnkS_q4p_w?si=kZjsEKzhzHAbPw-F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className={`${show=="show"?"h-315":"h-0"}`}></iframe> */}
          {groups.muscles.map((muscle) => {
            return (
              <iframe
                width="560"
                height="315"
                src={muscle.videoURL}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className={`${show == "show" ? "h-315" : "h-0"} m-auto p-5`}
              ></iframe>
            );
          })}
        </div>
        <img src={pull} alt="" className="w-[3rem] mx-auto pull mt-[-0.1rem]" />
      </div>
    </div>
  );
}

export default MuscleGroups;
