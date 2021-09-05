import React from 'react';
import './Square.css'
const Square = (props) =>{
    const [click,setClick]= React.useState(false);
    const handleClick=() =>{
      props.onClick();
      setClick(!click);
    }
    return (
        <button variant="contained"  border="100" className={click ? "square off":"square on"} onClick={handleClick}>
          {props.value}
        </button>
      );

}

export default Square;