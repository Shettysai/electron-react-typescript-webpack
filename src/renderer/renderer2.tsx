
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import '_public/style.css';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button,Input } from "reactstrap";

const App = () => {
const [hii, setHii]=useState(false);
const [text, settext]=useState("");

const toggle=()=>{
  setHii(!hii);
  console.log(hii);
}
  return (<div className="app1">

    <h1>from renderer2</h1>
    <button className="btn1" onClick={toggle}>click here</button>
    <div style={{float:"right",display:"inline-flex"}}>
    <Input placeholder="enter the text..." onChange={(event)=>{console.log(event.target.value)}}></Input>
    <Button color="primary">reactstrap</Button>
    </div>
  </div>)

}

ReactDOM.render(
  <App />,
  document.getElementById('app1'),
);
