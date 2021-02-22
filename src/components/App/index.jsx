import React, { useState } from "react";
import "./App.css";
import Button from "../button";

const App = () => {
    const [val, setVal] = useState("0");
    const [firstNum, setFirstNum] = useState(null);
    const [operator, setOperator] = useState(null);

    const handelBtn = content => () => {
        const number = parseFloat(val);
        if (content === "AC") {
            setVal("0");
            setFirstNum(null);
            setOperator(null);
            return;
        }

        if (content === "+/-") {
            setVal((number * -1).toString());
            return;
        }

        if (content === "%") {
            setVal((number / 100).toString());
            setFirstNum(null);
            setOperator(null);
            return;
        }
        if (content === ".") {
            if (val.includes(".")) return;

            setVal(val + ".");
            return;
        }

        if (content === "+") {
            if (operator != null) {
                if (operator === "+") {
                    setFirstNum(firstNum + parseFloat(val));
                } else if (operator === "-") {
                    setFirstNum(firstNum - parseFloat(val));
                } else if (operator === "×") {
                    setFirstNum(firstNum * parseFloat(val));
                } else if (operator === "÷") {
                    setFirstNum(firstNum / parseFloat(val));
                }
            } else {
                setFirstNum(parseFloat(val));
            }
            setVal("0");
            setOperator("+");
            return;
        }

        if (content === "-") {
            if (operator != null) {
                if (operator === "-") {
                    setFirstNum(firstNum + parseFloat(val));
                } else if (operator === "-") {
                    setFirstNum(firstNum - parseFloat(val));
                } else if (operator === "×") {
                    setFirstNum(firstNum * parseFloat(val));
                } else if (operator === "÷") {
                    setFirstNum(firstNum / parseFloat(val));
                }
            } else {
                setFirstNum(parseFloat(val));
            }
            setVal("0");
            setOperator("-");
            return;
        }
        if (content === "×") {
            if (operator != null) {
                if (operator === "×") {
                    setFirstNum(firstNum + parseFloat(val));
                } else if (operator === "-") {
                    setFirstNum(firstNum - parseFloat(val));
                } else if (operator === "×") {
                    setFirstNum(firstNum * parseFloat(val));
                } else if (operator === "÷") {
                    setFirstNum(firstNum / parseFloat(val));
                }
            } else {
                setFirstNum(parseFloat(val));
            }
            setVal("0");
            setOperator("×");
            return;
        }
        if (content === "÷") {

            if (operator != null) {
                if (operator === "÷") {
                    setFirstNum(firstNum + parseFloat(val));
                } else if (operator === "-") {
                    setFirstNum(firstNum - parseFloat(val));
                } else if (operator === "×") {
                    setFirstNum(firstNum * parseFloat(val));
                } else if (operator === "÷") {
                    setFirstNum(firstNum / parseFloat(val));
                }
            } else {
                setFirstNum(parseFloat(val));
            }



            setVal("0");
            setOperator("÷");
            return;
        }
        if (content === "=") {

            if (!operator) {
                return;
            }
            if (operator === "+") {
                setVal((firstNum + parseFloat(val)).toString());
            } else if (operator === "-") {
                setVal((firstNum - parseFloat(val)).toString());
            } else if (operator === "×") {
                setVal((firstNum * parseFloat(val)).toString());
            } else if (operator === "÷") {
                setVal((firstNum / parseFloat(val)).toString());
            }
            setFirstNum(null);
            setOperator(null);
            return;
        }

        if (val[val.length - 1] === ".") {
            setVal(val + content);
        } else {
            setVal(parseFloat(number + content).toString());
        }



    };
    window.addEventListener("keydown", (event) => {
        if (event.key === "1") {
            setVal("1");
        }
    })
    window.addEventListener("keydown", (event) => {
        if (event.key === "2") {
            setVal("2");
        }
    })
    window.addEventListener("keydown", (event) => {
        if (event.key === "3") {
            setVal("3");
        }
    })
    window.addEventListener("keydown", (event) => {
        if (event.key === "4") {
            setVal("4");
        }
    })
    window.addEventListener("keydown", (event) => {
        if (event.key === "5") {
            setVal("5");
        }
    })
    window.addEventListener("keydown", (event) => {
        if (event.key === "6") {
            setVal("6");
        }
    })
    window.addEventListener("keydown", (event) => {
        if (event.key === "7") {
            setVal("7");
        }
    })
    window.addEventListener("keydown", (event) => {
        if (event.key === "8") {
            setVal("8");
        }
    })
    window.addEventListener("keydown", (event) => {
        if (event.key === "9") {
            setVal("9");
        }
    })
    window.addEventListener("keydown", (event) => {
        if (event.key === "0") {
            setVal("0");
        }
    })
    return (
        <div className="App">
            <div className="display">{val}</div>
            <div className="buttons" >
                <Button onButtonClick={handelBtn} content="AC" type="function" />
                <Button onButtonClick={handelBtn} content="+/-" type="function" />
                <Button onButtonClick={handelBtn} content="%" type="function" />
                <Button onButtonClick={handelBtn} content="÷" type="operator" />
                <Button onButtonClick={handelBtn} content="7" />
                <Button onButtonClick={handelBtn} content="8" />
                <Button onButtonClick={handelBtn} content="9" />
                <Button onButtonClick={handelBtn} content="×" type="operator" />
                <Button onButtonClick={handelBtn} content="4" />
                <Button onButtonClick={handelBtn} content="5" />
                <Button onButtonClick={handelBtn} content="6" />
                <Button onButtonClick={handelBtn} content="-" type="operator" />
                <Button onButtonClick={handelBtn} content="1" />
                <Button onButtonClick={handelBtn} content="2" />
                <Button onButtonClick={handelBtn} content="3" />
                <Button onButtonClick={handelBtn} content="+" type="operator" />
                <Button onButtonClick={handelBtn} content="0" />
                <Button onButtonClick={handelBtn} content="." />
                <Button onButtonClick={handelBtn} content="=" type="operator" />
            </div>
        </div>
    )
}
export default App;