const iState = {
  name: "Aman",
  age: 20
};

const reducer = (state = iState, action) => {
  if (action.type === "CHANGE_NAME") {
    return {
      ...state,
      name: action.payload
    };
  }
  return state;
};
export default reducer;
