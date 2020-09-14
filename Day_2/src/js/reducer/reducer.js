
const iState = {
    name: "Harendra",
    age: 20

}
const reducer = (state = iState, action) => {

    const newAge = { ...state }

    switch (action.type) {
        case 'AGE_UP':
            newAge.age += action.value;
            break;
        case 'AGE_DOWN':
            newAge.age -= action.value;
            break;
    }

    return newAge


}
export default reducer