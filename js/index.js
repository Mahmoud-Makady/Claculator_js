
// let displayRes = document.querySelector('.answer');
//     console.log(displayRes);

function inputNum(num) {
    let displayRes = document.getElementById('answer');
    

    if (displayRes.innerHTML == '0') {
        displayRes.innerHTML = num;
    } else {
        displayRes.innerHTML += num;
    }
}


function inputOperator(operator) {
    let displayRes = document.getElementById('answer');

    let lastNum = displayRes.innerHTML.slice('-1');
    if ('+-*/'.indexOf(lastNum) == -1) {
        displayRes.innerHTML += operator;
    }
}



function clearDisplay() {
    document.getElementById('answer').innerHTML = '0';
}

function resDisplay() {
    let displayRes = document.getElementById('answer');
    try {
        displayRes.innerHTML = eval(displayRes.innerHTML);
    } catch (error) {
        displayRes.innerHTML = 'Error';
    }
}
