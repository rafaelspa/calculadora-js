document.querySelector('#btn-plus').addEventListener("click", plus);
document.querySelector('#btn-times').addEventListener("click", times);
document.querySelector('#btn-clear').addEventListener("click", clear);

function plus() {
    const n1 = document.getElementById("number1").value;
    const n2 = document.getElementById("number2").value;
    let result = document.getElementById('result-box');
    result.innerHTML = "";
    result.innerHTML = (Number(n1) + Number(n2)).toString();
}

function times() {
    const n1 = document.getElementById("number1").value;
    const n2 = document.getElementById("number2").value;
    let result = document.getElementById('result-box');
    result.innerHTML = "";
    result.innerHTML = (Number(n1) * Number(n2)).toString();
}

function clear() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById('result-box').innerHTML = "0";
}

const inputList = Array.from(document.querySelectorAll('.form-input'));

inputList.forEach(input => {
    input.addEventListener("change", element => {
        const elementValue = Number(element.target.value);
        if (isNumber(elementValue)) {
            element.target.classList.remove('input-error');
        } else {
            element.target.classList.add('input-error');
        }
    });
});

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
    }