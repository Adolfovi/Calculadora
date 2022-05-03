// Si pulso el boton de punto y no hay ningún operador en la pantalla sólo puedo escribir un punto. En 
// cambio si hay un operador en la pantalla entonces sólo puedo escribir dos puntos. Descubrir
// una función que cuente cuantas veces aparece un caracter en un cadena de texto.

// Si pulso un botón de operador y hay un operador en pantalla.
// En caso de que el operador de la pantalla sea la última posición entonces:
// - si son iguales no ocurre nada
// - si son diferentes se sustituye
// En caso de que la última posición de la pantalla sea un número entonces:
// - hace el calculo y añade el operador pulsado al final

function programm() {
    // DECLARACIÓN DE VARIABLES
    let result = document.querySelector(".result");
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");
    let coma = document.querySelector(".coma");
    let equal = document.querySelector(".equal");
    let deleteall = document.querySelector(".deleteall");
    let deleteone = document.querySelector(".delete");
    let operation = result.innerHTML;
    let comapressed = false;
    let operatorpressed = false;

    // DECLARACIÓN DE EVENTOS
    numbers.forEach(number => {
        number.addEventListener("click", () => {
        
            if (result.innerHTML == "0") {
                result.innerHTML = number.dataset.number;
                operatorpressed = false;
                operation = result.innerHTML;
            } else {
                result.innerHTML += number.dataset.number;
                operatorpressed = false;
                operation = result.innerHTML;
            }
        
        
        });
    });

    operators.forEach(operator => {
        operator.addEventListener("click", () => {
            if (operatorpressed == false) {
                result.innerHTML = result.innerHTML + operator.dataset.operator;
                comapressed = false;
                operatorpressed = true;
                operation = result.innerHTML;
            }

        });
    });

    coma.addEventListener('click', () => {
        if (comapressed == false) {
            result.innerHTML = result.innerHTML + ".";
            comapressed = true;
            operation = result.innerHTML;
        }
    });

    equal.addEventListener('click', () => {
        result.innerHTML = eval(result.innerHTML);
        operation = result.innerHTML;
    });

    deleteall.addEventListener('click', () => {
        result.innerHTML = "0";
        comapressed = false;
        operatorpressed = false;
        operation = result.innerHTML;
    });

    deleteone.addEventListener('click', () => {
        
        
        if (result.innerHTML.length == 1) {
            result.innerHTML = "0";
            operation = result.innerHTML;
        } else {
            result.innerHTML = result.innerHTML.slice(0, -1);
            operation = result.innerHTML;
        }




    });
}