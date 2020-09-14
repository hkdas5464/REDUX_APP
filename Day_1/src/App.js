import React from 'react';
import { connect } from 'react-redux';
function App(props) {
  console.log(props)
  return (
    <div>
      <h1>Hello {props.myname}</h1>
      <button onClick={() => { props.changeName("Harendra Kr. Das") }}>Change It</button>
    </div>
  )
}

const mapStateToprops = (state) => {
  return {
    myname: state.name
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => {
      dispatch(
        {
          type: 'CHANGE_NAME',
          payload: name
        }
      )
    }
  }
}
export default connect(mapStateToprops, mapDispatchToProps)(App);