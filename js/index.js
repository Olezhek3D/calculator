let display = document.getElementById("display");

function appendToDisplay(input) {
    if (display.value === "Error" || display.value === "Infinity" || display.value === "NaN"){
        display.value = "";
        display.value += input
    }
    else{
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
}


function calculate() {
    // Если на дисплее ошибка, очищаем его перед вычислением
    if (display.value === "Error" || display.value === "Infinity" || display.value === "NaN") {
        display.value = "";
    }
    
    try {
        // Вычисляем выражение
        display.value = Function('"use strict"; return (' + display.value + ')')();
        
        // Если результат вычисления - это ошибочные значения, например Infinity или NaN, показываем ошибку
        if (display.value === Infinity || display.value === -Infinity || isNaN(display.value)) {
            display.value = "Error";
        }
    } catch (error) {
        // Если ошибка при вычислении, отображаем "Error"
        display.value = "Error";
    }
}

// Удаление последнего символа
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
