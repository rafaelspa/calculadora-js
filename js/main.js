// Remove input-error from #number2

document.querySelector("#number2").classList.remove("input-error");


// Plus function

document.querySelector('#btn-plus').addEventListener("click", () => {
    const numbers = document.querySelectorAll(".form-input");
    const result = document.querySelector('#result-box');
   
    let sum = 0;
    let flag = true;

    const numbersArray = Array.from(numbers);

    numbersArray.forEach(input => {
        if(input.value == "") {
            input.classList.add("input-error");
            flag = false;
        }
        sum += Number(input.value);
    });
    
    if (flag){
        result.innerHTML = "";
        result.innerHTML = sum.toString();
    }
});


// Times function

document.querySelector('#btn-times').addEventListener("click", () => {
    const numbers = document.querySelectorAll(".form-input");
    const result = document.querySelector('#result-box');
   
    let sum = 1;
    let flag = true;

    const numbersArray = Array.from(numbers);

    numbersArray.forEach(input => {
        if(input.value == "") {
            input.classList.add("input-error");
            flag = false;
        }
        sum *= Number(input.value);
    });
    
    if (flag){
        result.innerHTML = "";
        result.innerHTML = sum.toString();
    }
});

// Clear function

document.querySelector('#btn-clear').addEventListener("click", () => {
    const numbers = document.querySelectorAll(".form-input");

    const numbersArray = Array.from(numbers);

    numbersArray.forEach(input => {
        input.value = "";
        input.classList.remove("input-error");
    });

    document.getElementById('result-box').innerHTML = '\n              0\n            ';
});


// input error trigger when is not a number and block non number chars

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

    input.addEventListener("keyup", element => {
        let n = Number(element.target.value);
        if (!isNumber(n)){
            element.target.value = "";
            element.preventDefault();
        }
    });
});

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
    }
