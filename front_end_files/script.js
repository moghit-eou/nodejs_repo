var first_number = 0;
var second_number = 0;
var second = 0;
element = document.getElementById("values");
function myFunction(value) {

    // Declare variables to store first and second numbers


    // Check if the value is not '='
    if (value != '=') {
        element.innerHTML += value;

        // Check if it's an operator
        if (value == '+') {
            // Set the flag for the second number
            second = 1;
        } else if (second == 0) {
            // If not an operator, update the first number
            first_number *= 10;
            first_number += parseInt(value); // Parse the value to an integer
        } else if (second) {
            second_number *= 10;
            second_number += parseInt(value)
        }
    } else {
        // Perform calculation when '=' is clicked
        result = first_number + second_number;
        element.innerHTML = result; // Update the displayed value with the result
    }
}
function reset() {
    first_number = 0;
    second_number = 0;
    second = 0;
    element.innerHTML = "";
}