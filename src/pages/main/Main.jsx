import React from 'react';
import './Main.css';



function darkMode(){
        document.getElementById("main").style.backgroundColor="#242424";
        document.getElementById("down").style.backgroundColor="#373737";
        document.getElementById("up").style.color="#fff";
        document.getElementById("light").style.fontWeight="100";
        document.getElementById("dark").style.fontWeight="bold";
        document.getElementById("light").style.color="#373737";
        document.getElementById("dark").style.color="aqua";      
  }

function lightMode(){
        document.getElementById("main").style.backgroundColor="#ffffff";
        document.getElementById("down").style.backgroundColor="#f1f1f1";
        document.getElementById("up").style.color="#2e2e2e";
        document.getElementById("dark").style.fontWeight="100";
        document.getElementById("light").style.fontWeight="bold";
        document.getElementById("dark").style.color="#ccc";
  }
function Main(){
 
  return(
    <div  id="main"className="main-container">
      <div id="mode"className="mode-container">
        <div className="mode-icone light"><i onClick={lightMode}  id="light" className="light-icone far fa-sun"/></div>
        <div className="mode-icone dark"><i onClick={darkMode} id="dark" className="dark-icone far fa-moon"/></div>
      </div>
      <div id="up" className="up">
        <p id="operation" className="operation">10 &times; 10 &times; 10</p>
        <h1 className="result">1000</h1>
      </div>
      <div id="down" className="down">
        <div className="teclado">
          <button class="action" id="clear">C</button>
          <button class="action" id="backspace">CE</button>
          <button class="operator" id="percent">%</button>
          <button class="operator" id="divide">&#247;</button>
          <button class="number" id="7">7</button>
          <button class="number" id="8">8</button>
          <button class="number" id="9">9</button>
          <button class="operator" id="multiply">&times;</button>
          <button class="number" id="4">4</button>
          <button class="number" id="5">5</button>
          <button class="number" id="6">6</button>
          <button class="operator" id="menus">-</button>
          <button class="number" id="1">1</button>
          <button class="number" id="2">2</button>
          <button class="number" id="3">3</button>
          <button class="operator" id="sum">+</button>
          <button class="operator" id="parentes">( )</button>
          <button class="number" id="0">0</button>
          <button class="number" id="coma">,</button>
          <button class="operator" id="equal">=</button>
        </div>
        <div className="simple-line"></div>
      </div>
    </div>
  );
}

export default Main;