let results = [];

function calculate(userInput){

    if (userInput === 'AC') {
        document.querySelector(".calculator-result").innerHTML = null;
    } else if (userInput === 'Del'){
        let previousResult = document.querySelector(".calculator-result");
        const newResult = previousResult.innerHTML.slice(0, -1);
        previousResult.innerHTML = newResult;
    } else if (userInput === '÷'){
        document.querySelector(".calculator-result").innerHTML += '/';
    } else if (userInput === '×'){
        document.querySelector(".calculator-result").innerHTML += '*';
    } else {
        document.querySelector(".calculator-result").innerHTML += userInput;
    }
}

function findTotal(){
    const equation = document.querySelector(".calculator-result");

    let result;
    try {
        result = eval(equation.innerHTML);
    } catch(error) {
        result = 'Error';
    }
    
    if (result !== 'Error'){
        results.push(`${equation.innerHTML} = ${result}`);
    }
    const resultLength = result.toString().length;
    if (resultLength > 15){
        result = result.toPrecision(10);
        equation.innerHTML = result;
        //equation.innerHTML = result.toExponential();
    } else {
        equation.innerHTML = result;
    }   
}

function showHistory(){

    const historyRecord = document.querySelector(".history-record");

    if (historyRecord.classList.contains('is-showing')){
        historyRecord.innerHTML = "";
        historyRecord.classList.remove('is-showing');
        showReset(0);
    } else {
        historyRecord.classList.add('is-showing');
        for (let i = results.length - 1; i >= 0; i--){
            historyRecord.innerHTML += results[i];
            historyRecord.innerText += '\n';
        }
        if (results.length >= 1){
            showReset(1);
        }
    }

}

function showReset(status){
    const resetStatus = document.querySelector(".reset-btn");

    if (status){
        resetStatus.classList.add('show-btn');
    } else {
        resetStatus.classList.remove('show-btn');
    }
}

function resetHistory(){
    results = [];
    document.querySelector(".history-record").innerHTML = "";
}