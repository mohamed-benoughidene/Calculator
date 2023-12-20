import React, { useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [currentOperation, setCurrentOperation] = useState("");

  const handleNumberClick = (num) => {
    if (displayValue === "0" || operator) {
      setDisplayValue(num);
      setCurrentOperation((prevOperation) => prevOperation + num);
    } else {
      setDisplayValue((prevValue) => prevValue + num);
      setCurrentOperation((prevOperation) => prevOperation + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (!prevValue) {
      setPrevValue(displayValue);
      setCurrentOperation((prevOperation) => prevOperation + op);
    } else {
      setCurrentOperation((prevOperation) => prevOperation + displayValue + op);
      calculate();
    }
    setOperator(op);
    setDisplayValue("0");
  };

  const handleEqualsClick = () => {
    setCurrentOperation((prevOperation) => prevOperation + displayValue);
    calculate();
    setOperator(null);
    setPrevValue(null);
    setCurrentOperation("");
  };

  const calculate = () => {
    let result;
    const currentValue = parseFloat(displayValue);
    const previousValue = parseFloat(prevValue);

    switch (operator) {
      case "+":
        result = previousValue + currentValue;
        break;
      case "-":
        result = previousValue - currentValue;
        break;
      case "*":
        result = previousValue * currentValue;
        break;
      case "/":
        result = previousValue / currentValue;
        break;
      default:
        return;
    }

    setDisplayValue(result.toString());
  };

  const handleClearClick = () => {
    setDisplayValue("0");
    setPrevValue(null);
    setOperator(null);
    setCurrentOperation("");
  };

  return (
    <div className="calculator">
      <div id="display" className="display">
        {currentOperation || displayValue}
      </div>
      <button id="clear" onClick={handleClearClick}>
        AC
      </button>
      <button id="equals" onClick={handleEqualsClick}>
        =
      </button>
      <button id="zero" onClick={() => handleNumberClick("0")}>
        0
      </button>
      <button id="one" onClick={() => handleNumberClick("1")}>
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
