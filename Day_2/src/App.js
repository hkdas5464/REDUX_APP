// import React from 'react';
// import { connect } from 'react-redux';
// function App(props) {
//   console.log(props)
//   return (
//     <div>
//       <h1>Hello {props.myname}</h1>
//       <button onClick={() => { props.changeName("Harendra Kr. Das") }}>Change It</button>
//     </div>
//   )
// }

// const mapStateToprops = (state) => {
//   return {
//     myname: state.name
//   }

// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeName: (name) => {
//       dispatch(
//         {
//           type: 'CHANGE_NAME',
//           payload: name
//         }
//       )
//     }
//   }
// }
// export default connect(mapStateToprops, mapDispatchToProps)(App);
////////////////////////////////////////////////////////////////////////////Increment a number ///////////////////////////////////////



import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className="App">
        Your Age:<span>{this.props.age}</span>
        <br />
        <button onClick={this.props.onAgeUp}>Age_Up</button>
        <button onClick={this.props.onAgeDown}>Age_Down</button>
      </div>

    )
  }
}

const mapStateToprops = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({
      type: 'AGE_UP',
      value: 1
    }),
    onAgeDown: () =>
      dispatch({
        type: 'AGE_DOWN',
        value: 1
      })

  }

}

export default connect(mapStateToprops, mapDispatchToProps)(App)


