const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

$('.change-counter').click(function(e){
    let value = $(this).data('value');
    let action = $(this).data('action');
    dispatch({ type: `${action}`, change : value})
})

$('.change-color').change(function(e){
    let action = $(this).data('action');
    let change = $(this).val();
    dispatch({ type: `${action}`, change : change})
})

$('.counter-value').keyup(function(e){
    let action = $(this).data('action');
    let change = $(this).val();
    (change.length == 0) ? change = 0 : change;
    change = parseInt(change) || 0
    console.log(parseInt(change));
    dispatch({ type: `${action}`, change : change})
})

render(getState());