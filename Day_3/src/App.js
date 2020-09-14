import React from "react";
import "./styles.css";
import {connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <h1>{props.age}</h1>
      <button className="ageup" onClick={props.onAgeUp}>Age_Up</button>
      <button className="ageup" onClick={props.onAgeDown}>Age_Down</button>
 
 <hr/>
 <br/>
<div>
History
  </div>
  <div>
<ul>
  
  {props.history.map(el=>(
<li className="historyItem" key={el.id}>
{el.age}
  </li>
  )

  )
  }
  </ul>
    </div>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return {
age:state.age,
history:state.history
  }
}

const mapDispatchToProps=(dispatch)=>{

return{
onAgeUp:()=> dispatch({
type:'AGE_UP',
value:1
}),
onAgeDown:()=>dispatch({
type:'AGE_DOWN',
value:1
})
}
}


export default connect(mapStateToProps,mapDispatchToProps)(App)