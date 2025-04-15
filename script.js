
let inputBox = document.querySelector('#input-box');
let buttons = document.querySelectorAll('.btn');

// Variable to store the current input
let expression = "";

// Loop through each button and add a click event
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        let value = button.textContent;


        if (value === '=') {
            try {
                expression = eval(expression);
                inputBox.value = expression;
            } catch (error) {
                inputBox.value = "Error";
                expression = "";
            }
        }

        // If user clicks 'C', clear everything
        else if (value === 'C') {
            expression = "";
            inputBox.value = "";
        }

        // For other buttons (numbers, operators), add to expression
        else {
            expression += value;
            inputBox.value = expression;
        }
    });
});
