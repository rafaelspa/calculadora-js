document.querySelector('#btn-plus').addEventListener("click", plus);
document.querySelector('#btn-times').addEventListener("click", times);

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