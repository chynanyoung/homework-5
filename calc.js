/* When called with "/", it returns the index.html static page.
 * When called with "/calculate/op/:op/num1/:num1/num2/:num2", it returns
 * the answer of the logical calculation
 */

// Set up some global constants for the program
const express = require('express');
const app = express();
app.listen(process.env.PORT);
let port = process.env.PORT || 80;
}
app.listen(port);
/**
 * The index function redirects the user to request "index.html"
 */
function index(req, res) {
    res.redirect('/index.html');
}

/**
 * Calculate the logical answer and send it back to the user
 */
 
 //answer +=0
 // the console.logs in the cases are for my own understanding.
 
function calculate(req, res) {
    console.log(req.params);
    let answer = "";

    let op = req.params.op;
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    console.log(op);
    console.log(num1,num2);
    
    // We should calculate the answer here
   switch(op){
       case "NOT":
           console.log("end case not");
            
            for (let i = 0; i < num1.length; i++){
                if (num1.charAt(i) === '0') {
                    answer += '1';
                } else {
                    answer += '0';
                }
        
            } 
            break;
        case "AND": 
            console.log("end case and");
            
              for (let i = 0; i < num1.length; i++){
                if (num1.charAt(i) === '0' && num2.charAt(i) === '1') {
                    answer += '0';
                } else {
                    answer += '1';
                }
            }            
            break;

        case "OR":
            console.log("end case or")
             for (let i = 0; i < num1.length; i++){
                if (num1.charAt(i) === '0' || num2.charAt(i) === '0') {
                    answer += '0';
                } else {
                    answer += '1';
                }
            } 
            break;
    }
    
