let screen = document.querySelector("#screen");
let button = document.querySelector(".container-button");
let screenReset = false;
let canOperate = false;
let tmpVal = '';
let operator = '';

button.addEventListener("click", function(e) {
    let buttonClick = e.target;
    let buttonValue = buttonClick.innerText;

    if(buttonValue == "AC") {
        screen.value = "";
        tmpVal = "";
    } else if(buttonValue == "C") {
        screen.value = screen.value.slice(0, -1);
    } else if(buttonValue == "=") {
        if(canOperate == true) {
            screen.value = eval(tmpVal + operator + screen.value);
            canOperate = false;
        }
    } else if(buttonValue == ".") {
        screen.value = screen.value + buttonValue;
    } else if(buttonClick.classList.contains('operator')) {
        if(canOperate == true) {
            screen.value = eval(tmpVal + operator + screen.value);
            canOperate = false; 
        }

        tmpVal = screen.value;
        operator = buttonValue;
        screenReset = true;
    } else {
        if(screenReset == true) {
            screen.value = buttonValue;
            screenReset = false;
            canOperate = true;
        } else {
            screen.value = screen.value + buttonValue;
        }
    }
});