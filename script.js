let add = (num1, num2) => num1+num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1/num2;

let total = '';
let flag = 1;
let display = document.querySelector('.display');

function refactorString(total){
    let totalAux = total.split(" ");
    totalAux = totalAux.map((string)=> string.trim());
    totalAux = totalAux.filter((string)=> string.length>=1);
    return totalAux;
}

function calculateStringEqual(){
    let totalAux = refactorString(total);
    if(totalAux.length==2 && display.textContent == totalAux[0]){
        total += totalAux[0];

        calculateString();
    } else {
        calculateString();
    }
    flag = 1;   
}

function verifyChange(){
    let totalAux = refactorString(total);
    if(totalAux.length > 2){
        return false;
    } else {
        return true;
    }
}



function calculateString(){
    let calculus = 0;
    let totalAux = refactorString(total);
    if(totalAux[1]=='+'){
        calculus = Number(totalAux[0]) + Number(totalAux[2]);
        display.textContent = calculus;
        total = `${calculus} `
    } else
    if(totalAux[1]=='-'){
        calculus = Number(totalAux[0]) - Number(totalAux[2]);
        display.textContent = calculus;
        total = `${calculus} `
    } else 
    if(totalAux[1]=='x'){
        calculus = Number(totalAux[0]) * Number(totalAux[2]);
        display.textContent = calculus;
        total = `${calculus} `
    } else
    if(totalAux[1]=='/'){
        calculus = Number(totalAux[0]) / Number(totalAux[2]);
        display.textContent = calculus;
        total = `${calculus} `
    }
}

let button0 = document.querySelector('#zero');
button0.addEventListener('click', ()=>{
    if(display.textContent == '0')
        display.textContent = '0';
    else {
        display.textContent += `0`;
    }
    let totalAux = refactorString(total);
    if(totalAux.length == 2)
        display.textContent = `0`;
})

let button1 = document.querySelector('#one');
button1.addEventListener('click', ()=>{
    let totalAux = refactorString(total);
    if(total == '' && display.textContent == '0'){
        display.textContent = '1';
    } else if(total == '' && display.textContent != '0'){
        display.textContent += '1';
    } else if(flag == 1 && totalAux!=undefined && display.textContent != '0'){
        display.textContent = '1';
        flag = 0;
    } else {
        display.textContent += '1';
    }
})

let button2 = document.querySelector('#two');
button2.addEventListener('click', ()=>{
    let totalAux = refactorString(total);
    if(total == '' && display.textContent == '0'){
        display.textContent = '2';
    } else if(total == '' && display.textContent != '0'){
        display.textContent += '2';
    } else if(flag == 1 && totalAux!=undefined && display.textContent != '0'){
        display.textContent = '2';
        flag = 0;
    } else {
        display.textContent += '2';
    }
})

let button3 = document.querySelector('#three');
button3.addEventListener('click', ()=>{
    let totalAux = refactorString(total);
    if(total == '' && display.textContent == '0'){
        display.textContent = '3';
    } else if(total == '' && display.textContent != '0'){
        display.textContent += '3';
    } else if(flag == 1 && totalAux!=undefined && display.textContent != '0'){
        display.textContent = '3';
        flag = 0;
    } else {
        display.textContent += '3';
    }
})

let button4 = document.querySelector('#four');
button4.addEventListener('click', ()=>{
    let totalAux = refactorString(total);
    if(total == '' && display.textContent == '0'){
        display.textContent = '4';
    } else if(total == '' && display.textContent != '0'){
        display.textContent += '4';
    } else if(flag == 1 && totalAux!=undefined && display.textContent != '0'){
        display.textContent = '4';
        flag = 0;
    } else {
        display.textContent += '4';
    }
})

let button5 = document.querySelector('#five');
button5.addEventListener('click', ()=>{
    let totalAux = refactorString(total);
    if(total == '' && display.textContent == '0'){
        display.textContent = '5';
    } else if(total == '' && display.textContent != '0'){
        display.textContent += '5';
    } else if(flag == 1 && totalAux!=undefined && display.textContent != '0'){
        display.textContent = '5';
        flag = 0;
    } else {
        display.textContent += '5';
    }
})

let button6 = document.querySelector('#six');
button6.addEventListener('click', ()=>{
    let totalAux = refactorString(total);
    if(total == '' && display.textContent == '0'){
        display.textContent = '6';
    } else if(total == '' && display.textContent != '0'){
        display.textContent += '6';
    } else if(flag == 1 && totalAux!=undefined && display.textContent != '0'){
        display.textContent = '6';
        flag = 0;
    } else {
        display.textContent += '6';
    }
})

let button7 = document.querySelector('#seven');
button7.addEventListener('click', ()=>{
    let totalAux = refactorString(total);
    if(total == '' && display.textContent == '0'){
        display.textContent = '7';
    } else if(total == '' && display.textContent != '0'){
        display.textContent += '7';
    } else if(flag == 1 && totalAux!=undefined && display.textContent != '0'){
        display.textContent = '7';
        flag = 0;
    } else {
        display.textContent += '7';
    }
})

let button8 = document.querySelector('#eight');
button8.addEventListener('click', ()=>{
    let totalAux = refactorString(total);
    if(total == '' && display.textContent == '0'){
        display.textContent = '8';
    } else if(total == '' && display.textContent != '0'){
        display.textContent += '8';
    } else if(flag == 1 && totalAux!=undefined && display.textContent != '0'){
        display.textContent = '8';
        flag = 0;
    } else {
        display.textContent += '8';
    }
})

let button9 = document.querySelector('#nine');
button9.addEventListener('click', ()=>{
    let totalAux = refactorString(total);
    if(total == '' && display.textContent == '0'){
        display.textContent = '9';
    } else if(total == '' && display.textContent != '0'){
        display.textContent += '9';
    } else if(flag == 1 && totalAux!=undefined && display.textContent != '0'){
        display.textContent = '9';
        flag = 0;
    } else {
        display.textContent += '9';
    }
})

let buttonAdd = document.querySelector('#add');
buttonAdd.addEventListener('click', ()=>{
    if(refactorString(total).length < 2){
        total = display.textContent;
        total += ' + ' 
    } else if(refactorString(total).length == 2){
        total += display.textContent;
    }
    if(refactorString(total).length == 3){
        calculateString();
        total += '+ ' 
    }
    flag = 1;
})

let buttonSubtract = document.querySelector('#subtract');
buttonSubtract.addEventListener('click', ()=>{
    if(refactorString(total).length < 2){
        total = display.textContent;
        total += ' - ' 
    } else if(refactorString(total).length == 2){
        total += display.textContent;
    }
    if(refactorString(total).length == 3){
        calculateString();
        total += '- ' 
    }
    flag = 1;  
})

let buttonDivide = document.querySelector('#divide');
buttonDivide.addEventListener('click', ()=>{
    if(refactorString(total).length < 2){
        total = display.textContent;
        total += ' / ' 
    } else if(refactorString(total).length == 2){
        total += display.textContent;
    }
    if(refactorString(total).length == 3){
        calculateString();
        total += '/ ' 
    }
    flag = 1; 
})

let buttonMultiply = document.querySelector('#multiply');
buttonMultiply.addEventListener('click', ()=>{
    if(refactorString(total).length < 2){
        total = display.textContent;
        total += ' x ' 
    } else if(refactorString(total).length == 2){
        total += display.textContent;
    }
    if(refactorString(total).length == 3){
        calculateString();
        total += 'x ' 
    }
    flag = 1;
})

let buttonErase = document.querySelector('#erase');
buttonErase.addEventListener('click', ()=>{
    flag = 1;
    display.textContent = (display.textContent).substring(0, (display.textContent).length-1);
    if((display.textContent).length == 0){
        display.textContent = 0;
    }
})

let buttonClear = document.querySelector('#clear');
buttonClear.addEventListener('click', ()=>{
    flag = 1;
    display.textContent = 0;
    total = '';
})

let buttonEqual = document.querySelector("#equals");
buttonEqual.addEventListener('click', ()=>{
    flag = 1;
    if(refactorString(total).length > 1){
        total += display.textContent;
        console.log(total);
        calculateStringEqual();
    }
})