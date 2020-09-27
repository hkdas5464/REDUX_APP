import React from 'react';
import logo from './logo.svg';
 import { connect } from 'react-redux';
import { del } from './del/del.png'
 import './App.css';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello <code>{props.name}</code> and save to reload.
        </p>


        <p>{props.age}</p>
        <button className="bttn" onClick={props.OnAgeUp}>+</button>
        <button className="bttn" onClick={props.onAgeDown}>-</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          History
      </div>
        <div>
          <ul>
            {props.history.map(el => (
              <li className="list" key={el.id} >
                {el.age}
                <button className="btn" onClick={() => props.onDelItem(el.id)}><img className="imgs" src={require('./del/del.png')} /></button>
              </li>
            ))}
          </ul>
        </div>
      </header>

    </div >
  );
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeName: (name) => {
//       dispatch({
//         type: "CHANGE_NAME",
//         payload: name
//       })

//     }
//   }
// }
const mapDispatchToProps = (dispatch) => {
  return {
    OnAgeUp: () => dispatch({
      type: 'AGE_UP',
      value: 1
    }),
    onAgeDown: () => dispatch({
      type: 'AGE_DOWN',
      value: 1
    }),
    onDelItem: (id) => dispatch({
      type: "DEL_ITEM",
      key: id
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// function App(props){
//   return(
//     <div className="App">
//     <div className="col">
//     <div><span>A:</span>{props.a}<span></span></div>
//     <button onClick={()=>props.updateA(props.b)}>UPDATE_A</button>
//         </div>
//         <div className="col">
// <div><span>B:</span><span>{props.b}</span></div>
// <button onClick={()=>props.updateB(props.a)}>UPDATE_B</button>
//         </div>
//     </div>
//   )
// }
// const mapStoreToProps=(store)=>{
//   return{
//     a:store.rA.a,
//     b:store.rB.b 
    
//   }
  

// }
// const mapDispatchToProps=(dispatch)=>{
//   return{
//     updateA:(b)=>dispatch({type:'UPDATE_A',b:b}),
//     updateB:(a)=>dispatch({ type:'UPDATE_B',a:a})
//   }
// }

// export default connect(mapStoreToProps,mapDispatchToProps) (App);