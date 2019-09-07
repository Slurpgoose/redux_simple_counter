const render = (state) => {
    const counterDOM = $('#counterValue');
    counterDOM.html(state.value);
    counterDOM.css('color', state.color);
    $('.change-color').val(state.color);
}