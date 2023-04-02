import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleNumClick = (num) => {
    if (!operator) {
      setNum1(num1 + num);
    } else {
      setNum2(num2 + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (num1 && num2) {
      handleEqualsClick();
    }
    setOperator(op);
  };

  const handleEqualsClick = () => {
    let newResult;
    switch (operator) {
      case "+":
        newResult = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        newResult = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        newResult = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        newResult = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        newResult = 0;
    }
    setResult(newResult);
    setNum1(newResult.toString());
    setNum2("");
    setOperator("");
  };
  

  const handleClearClick = () => {
    setNum1("");
    setNum2("");
    setOperator("");
    setResult("");
  };

  return (
    <div className="container">
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="output">
          <div className="result">{result}</div>
          <div className="formula">
            {num1} {operator} {num2}
          </div>
        </div>
        <div className="keys">
          <button onClick={handleClearClick} className="clear-btn">
            C
          </button>
          <button onClick={() => handleNumClick("7")}>7</button>
          <button onClick={() => handleNumClick("8")}>8</button>
          <button onClick={() => handleNumClick("9")}>9</button>
          <button onClick={() => handleOperatorClick("/")}>/</button>
          <button onClick={() => handleNumClick("4")}>4</button>
          <button onClick={() => handleNumClick("5")}>5</button>
          <button onClick={() => handleNumClick("6")}>6</button>
          <button onClick={() => handleOperatorClick("*")}>*</button>
          <button onClick={() => handleNumClick("1")}>1</button>
          <button onClick={() => handleNumClick("2")}>2</button>
          <button onClick={() => handleNumClick("3")}>3</button>
          <button onClick={() => handleOperatorClick("-")}>-</button>
          <button onClick={() => handleNumClick("0")}>0</button>
          <button onClick={() => handleOperatorClick("+")}>+</button>
          <button onClick={handleEqualsClick} className="equals-btn">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
