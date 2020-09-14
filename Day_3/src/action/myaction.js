// export const anotherAction = (name) => {
//   return {
//     type: "CHANGE_NAME",
//     payload: name
//   };
// };

export const anotherAction = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res2) => {
        dispatch({ type: "CHANGE_NAME", 
        payload: res2[2].name });
      });
  };
};
