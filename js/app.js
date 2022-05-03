let operation;

function programm() {
    // DECLARACIÓN DE VARIABLES
    let result = document.querySelector(".result");
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");
    let coma = document.querySelector(".coma");
    let equal = document.querySelector(".equal");
    let deleteall = document.querySelector(".deleteall");

    // DECLARACIÓN DE EVENTOS
    numbers.forEach(number => {
        number.addEventListener("click", () => {
            if (result.innerHTML == "0") {
                result.innerHTML = "";
                result.innerHTML = result.innerHTML + number.dataset.number;
                operation = result.innerHTML;
            } else {
                result.innerHTML = result.innerHTML + number.dataset.number;
                operation = result.innerHTML;
            }

        });
    });

    operators.forEach(operator => {
        operator.addEventListener("click", () => {
            result.innerHTML = result.innerHTML + operator.dataset.operator;
            operation = result.innerHTML;
        });
    });

    coma.addEventListener('click', () => {
        result.innerHTML = result.innerHTML + ".";
        operation = result.innerHTML;
    });

    equal.addEventListener('click', () => {
        result.innerHTML = eval(result.innerHTML);

    });

    deleteall.addEventListener('click', () => {
        result.innerHTML = "0";
    });

}