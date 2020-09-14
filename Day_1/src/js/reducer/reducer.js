
const iState = {
    name: "Harendra",
    age: "20"

}
const reducer = (state = iState, action) => {

    if (action.type === "CHANGE_NAME") {
        return {
            ...state,
            name: action.payload
        }
    }
    console.log(action)

    return state;
}
export default reducer