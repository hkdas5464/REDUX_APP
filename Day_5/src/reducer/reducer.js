
const iState = {
    name: "Harendra",
    age: 20,
    history: []
}

const reducer = (state = iState, action) => {

    const newAge = { ...state };

    switch (action.type) {
        case 'AGE_UP':
            //newAge.age += action.value;
            return {
                ...state,
                age: state.age + action.value,
                history: state.history.concat({ id: Math.random(), age: state.age + action.value })
            }
            break
        case 'AGE_DOWN':
            // newAge.age -= action.value;
            return {
                ...state,
                age: state.age - action.value,
                history: state.history.concat({ id: Math.random(), age: state.age - action.value })
            };
        case "DEL_ITEM":
            return {
                ...state,
                history: state.history.filter(el => el.id !== action.key)
            }
            break;
    }

    // if (action.type === 'CHANGE_NAME') {
    //     return {
    //         ...state,
    //         name: action.payload
    //     }
    // }
    return newAge
}
export default reducer; 