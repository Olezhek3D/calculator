// let display = document.getElementById("display");

// function appendToDisplay(input){
//     display.value += input;
// }

// function clearDisplay(){
//     display.value = ""
// }
// function calculate(){
//     try{
//         display.value = eval(display.value)
//     }
//     catch(error){
//         display.value = "Error"
//     }
// }
// function deleteToDisplay(input) {
//     display.value -= input;
// }


let display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

// Альтернативный вариант без eval()
function calculate() {
    try {
        display.value = Function('"use strict"; return (' + display.value + ')')();
    } catch (error) {
        display.value = "Error";
    }
}

// Удаление последнего символа
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
