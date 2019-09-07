const initialState = {
    value: 0,
    color: 'green'
}

const reducer = (state = initialState, action) => {
    console.log(action)
    let { change } = action;
    let { type } = action;
    switch(type) {
        case "INCREMENT":
            return {
                color : state.color,
                value: state.value + parseInt(change)
            }
            break;
    
        case "DECREMENT":
            return {
                color : state.color,
                value: state.value - change
            }
            break;
    
        case "COLOR-CHANGE":
            return {
                value : state.value,
                color : change
            }
            break;
        
        case "RESET-VALUE":
            return {
                value : parseInt(change),
                color : state.color
            }
            break;
        
    }
    return state
}

