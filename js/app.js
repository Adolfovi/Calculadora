let operation;

function programm() {
    // DECLARACIÓN DE VARIABLES
    let result = document.querySelector(".result");
    let one = document.querySelector(".one");
    let two = document.querySelector(".two");
    let three = document.querySelector(".three");
    let four = document.querySelector(".four");
    let five = document.querySelector(".five");
    let six = document.querySelector(".six");
    let seven = document.querySelector(".seven");
    let eight = document.querySelector(".eight");
    let nine = document.querySelector(".nine");
    let zero = document.querySelector(".zero");
    let coma = document.querySelector(".coma");
    let equal = document.querySelector(".equal");
    let plus = document.querySelector(".plus");
    let minus = document.querySelector(".minus");
    let multiplication = document.querySelector(".multiplication");
    let dividition = document.querySelector(".divition");

    // DECLARACIÓN DE EVENTOS

    one.addEventListener('click', () => {
        result.innerHTML = result.innerHTML + 1;
        operation = result.innerHTML;
    });

    two.addEventListener('click', () => {
        result.innerHTML = result.innerHTML + 2;
        operation = result.innerHTML;
    });

    three.addEventListener('click', () => {
        result.innerHTML = result.innerHTML + 3;
        operation = result.innerHTML;
    });

    four.addEventListener('click', () => {
        result.innerHTML = result.innerHTML + 4;
        operation = result.innerHTML;
    });

    five.addEventListener('click', () => {
        result.innerHTML = result.innerHTML + 5;
        operation = result.innerHTML;
    });

    six.addEventListener('click', () => {
        result.innerHTML = result.innerHTML + 6;
        operation = result.innerHTML;
    });

    seven.addEventListener('click', () => {
        result.innerHTML = result.innerHTML + 7;
        operation = result.innerHTML;
    });

    eight.addEventListener('click', () => {
        result.innerHTML = result.innerHTML + 8;
        operation = result.innerHTML;
    });

    nine.addEventListener('click', () => {
        result.innerHTML = result.innerHTML + 9;
        operation = result.innerHTML;
    });

    zero.addEventListener('click', () => {
        result.innerHTML = result.innerHTML + 0;
        operation = result.innerHTML;
    });

    coma.addEventListener('click', () => {
        result.innerHTML = result.innerHTML + ".";
        operation = result.innerHTML;
    });

    plus.addEventListener('click', () => {
        result.innerHTML = result.innerHTML + "+";
        operation = result.innerHTML;
    });

    minus.addEventListener('click', () => {
        result.innerHTML = result.innerHTML + "-";
        operation = result.innerHTML;
    });

    multiplication.addEventListener('click', () => {
        result.innerHTML = result.innerHTML + "*";
        operation = result.innerHTML;
    });

    dividition.addEventListener('click', () => {
        result.innerHTML = result.innerHTML + "/";
        operation = result.innerHTML;
    });

    equal.addEventListener('click', () => {
        result.innerHTML = eval(result.innerHTML);

    });


}