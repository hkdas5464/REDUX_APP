import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { anotherAction } from "./action/myaction";
function App(props) {
  return (
    <div className="App">
      <h1>Hello {props.myname}</h1>
      <h1>Age:{props.age}</h1>
      <button
        onClick={() => {
          props.changeName();
        }}
      >
        ChangeName
      </button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myname: state.name,
    age: state.age
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => {
      dispatch(anotherAction());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
