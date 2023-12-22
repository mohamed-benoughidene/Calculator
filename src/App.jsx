import React, { useState } from "react";

const Calculator = () => {
   // State to hold the mathematical operation
 const [mathOperation, setMathOperation] = useState({
  num1: 0,
  num2: null,
  operator: null
 });
   // Function to handle number button clicks
 function handleNumberClick(num){
      // Add numbers to num1 or num2 depending on if there is an operator

  if(mathOperation.operator){
    let newNumbers = [
              // Remove leading zeros from num2 if there are any
      (mathOperation.num2 && mathOperation.num2.charAt(0) === "0") ? "" : mathOperation.num2, num];
    setMathOperation({...mathOperation, num2: newNumbers.join("")});
  }else{
            // Remove leading zeros from num1 if there are any
    let newNumbers = [mathOperation.num1.toString().replace(/^0+/, ""), num];
    setMathOperation({...mathOperation, num1: newNumbers.join("")})
  }
 }
   // Function to handle operator button clicks
 function handleOperatorClick(operator){
    // Set the operator and call handleEqualClick if there is already a num2
setMathOperation({...mathOperation, operator});
if(mathOperation.num2){
  handleEqualClick()
}
 }
  // Function to handle equal button click
function handleEqualClick(equalButtonPressed){
  return new Promise((resolve, reject) => {
    const parseNum1 = parseInt(mathOperation.num1);
    const parseNum2 = parseInt(mathOperation.num2);
    switch (mathOperation.operator) {
      case "+":
        setMathOperation({
          num1: parseNum1 + parseNum2,
          num2: null,
          operator: equalButtonPressed ? null : "+",
        })  
        break;
      case "-":
        setMathOperation({
          num1: parseNum1 - parseNum2,
          num2: null,
          operator: equalButtonPressed ? null : "-",
        })  
        break;
      case "*":
        setMathOperation({
          num1: parseNum1 * parseNum2,
          num2: null,
          operator: equalButtonPressed ? null : "*",
        })  
        break;
      case "/":
        setMathOperation({
          num1: parseNum1 / parseNum2,
          num2: null,
          operator: equalButtonPressed ? null : "/",
        })  
        break;
      default:
        reject(new Error("Invalid operator"));
    }
    resolve();
  });
}
  // Function to handle clear button click
function handleClear(){
  setMathOperation({
    num1: 0,
    num2: null,
    operator: null
  })
  }

  return (
    <div className="calculator">
      <div id="display" className="display">
      
      {mathOperation.num1}{mathOperation.operator && ` ${mathOperation.operator}`} {mathOperation.num2}
      </div>
      <button id="clear" onClick={handleClear}>
        AC
      </button>
      <button id="equals" onClick={()=> handleEqualClick(true)}>
        =
      </button>
      <button id="zero" onClick={()=> handleNumberClick("0")}>
        0
      </button>
      <button id="one"  onClick={() => handleNumberClick("1")}>
        1
      </button>
      <button id="two" onClick={() => handleNumberClick("2")}>
        2
      </button>
      <button id="three" onClick={() => handleNumberClick("3")}>
        3
      </button>
      <button id="four" onClick={() => handleNumberClick("4")}>
        4
      </button>
      <button id="five" onClick={() => handleNumberClick("5")}>
        5
      </button>
      <button id="six" onClick={() => handleNumberClick("6")}>
        6
      </button>
      <button id="seven" onClick={() => handleNumberClick("7")}>
        7
      </button>
      <button id="eight" onClick={() => handleNumberClick("8")}>
        8
      </button>
      <button id="nine" onClick={() => handleNumberClick("9")}>
        9
      </button>
      <button id="add" onClick={() => handleOperatorClick("+")}>
        +
      </button>
      <button id="subtract" onClick={() => handleOperatorClick("-")}>
        -
      </button>
      <button id="multiply" onClick={() => handleOperatorClick("*")}>
        *
      </button>
      <button id="divide" onClick={() => handleOperatorClick("/")}>
        /
      </button>
    </div>
  );
};

export default Calculator;

