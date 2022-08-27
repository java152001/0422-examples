import React from 'react';

export default function Click() {
  const handleClick = e => {
    alert(`Hey! You clicked on: ${e.target.id}`);
  }

  const handleHoverEnter = e => {
    alert(`Whoa! You just hovered on: ${e.target.id}`);
  }

  const handleHoverExit = e => {
    alert(`Zoinks! You just stopped hovering on: ${e.target.id}`);
  }

  return (
    <div className="container-div">
      <div id="div-element" onClick={(e) => handleClick(e)} onMouseEnter={(e) => handleHoverEnter(e)} onMouseLeave={(e) => handleHoverExit(e)}>I am DIV</div>

      <span id="span-element" onClick={(e) => handleClick(e)}>I am SPAN</span>
      <br></br>

      <button id="button-element" onClick={(e) => handleClick(e)}>I am Button</button>
      <br></br>

      <a id="link-element" href="" onClick={(e) => handleClick(e)}>
        I am LINK
        </a>

      <div id="div-element-2" onClick={(e) => handleClick(e)} className="button">
        I am DIV
        </div>

      <span id="span-element-2" onClick={(e) => handleClick(e)} className="button">
        I am SPAN
        </span>
      <br></br>

      <button id="button-element-2" onClick={(e) => handleClick(e)} className="button">
        I am Button
        </button>
      <br></br>

      <a id="link-element-2" onClick={(e) => handleClick(e)} className="button" href="">
        I am LINK
        </a>
    </div>
  )
}