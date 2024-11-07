let operatorsbex = ['+', '-', '*', '/'];
let operatorsAllbex = ['**', '%', '&&', '||', '&', '|', '^', '==', '===', '>', '<'];

function startCalculatorbex() {
    document.getElementById("calculatorbex").style.display = "initial";
    document.getElementById("operatorsbex").style.display = "none";
    document.getElementById("memorybex").style.display = "none";
    loadOperatorsbex();
    loadAllOperatorsbex();
}

function loadOperatorsbex() {
    let select = document.getElementById("selectOperatorbex");
    select.innerHTML = '';
    for (let op of operatorsbex) {
        let option = document.createElement('option');
        option.value = op;
        option.innerHTML = op;
        select.appendChild(option);
    }
}

function loadAllOperatorsbex() {
    let select = document.getElementById("selectAddOperatorbex");
    for (let op of operatorsAllbex) {
        let option = document.createElement('option');
        option.value = op;
        option.innerHTML = op;
        select.appendChild(option);
    }
}

// Additional functions like `calculatebex`, `toOperatorsbex`, `addOperatorbex`, etc., should be defined similarly.
