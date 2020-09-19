// Set cache = false so it'll refresh on the page 
$.ajaxSetup({
    cache: false,
});

/**
 * Add a hello world right at the top to make sure the Javascript is loaded
 */
console.log("Hello world");

/**
 * Success is called when the answer is returned from the server. This
 * updates the answer text to the answer returned by the server
 */
function success(data) {
    console.log("success=" + data);
    $("#answer").text("Answer=" + data);
}


/**
 * Given the op and the numbers, send the operands to the server and
 * set up the success function to receive the answer once the server has
 * calculated it.
 */
function send(op, num1, num2) {
    let url = "/calculate/op/" + op + "/num1/" + num1 + "/num2/" + num2;
    console.log(url);
    $.get(url, success);
}


// check if the input is logical using a for loop and
//use alert function if the function does not have 0's or 1's
// char At
function logicalInput (num1,num2) {
    let isGoodInput = true;
    for (let i = 0; i < num1.length; i++){
        if ((num1.charAt(i) !== '0') && (num1.charAt(i) !== '1')) {
            
