import React, { useState } from "react";
import "./Button.css";

const PLayBtns = (props) => {
    const [toggle, SetToggle] = useState(true);
    const handleClick= () =>{
    if(toggle){
        SetToggle(false);
        props.onPlayClick();

    }else{
        SetToggle(true);
        props.onPauseClick();
    }};
  return (
    <div>
{ toggle ?      <a className="play-btn" onClick={handleClick}>
        Play
      </a>:
      <a className="play-btn is-playing" onClick={handleClick}>
        Play
      </a>}
      {/* <a className="play-btn is-loading" href="#">
        Playa
      </a> */}
    </div>
  );
};

export default PLayBtns;