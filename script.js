
document.addEventListener('keydown', function (event) {
    const keyCode = event.keyCode;
    const key = event.key;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Key pressed: ${key}, Keycode: ${keyCode}`;

});
