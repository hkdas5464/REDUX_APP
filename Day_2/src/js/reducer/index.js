import { act } from "react-dom/test-utils";

const iState = {
    name: "ramesh",
    wish: ['eat,code']
}

const reducer = (state = iState, action) => {
    if (action.type === 'CHANGE_NAME') {
        return {
            name: action.payload
        }
    }
    return state

}

export default reducer;