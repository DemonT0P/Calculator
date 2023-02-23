let add = (num1, num2) => num1+num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1/num2;

let total = '';
let display = document.querySelector('.display');

function verifyChange(){
    let totalAux = total.split(" ");
    totalAux = totalAux.map((string)=> string.trim());
    totalAux = totalAux.filter((string)=> string.length>=1);
    if(totalAux.length > 2){
        return false;
    } else {
        return true;
    }
}

function calculateString(){
    let totalAux = total.split(" ");
    let calculus = 0; 
    totalAux = totalAux.map((string)=> string.trim());
    totalAux = totalAux.filter((string)=> string.length>=1);
    if(totalAux[1]=='+'){
        calculus = Number(totalAux[0]) + Number(totalAux[2]);
        display.textContent = calculus;
        total = `${calculus} + `
    }
}

function verifyButtons(){

}

function operate(operator, num1, num2){
    switch(operator){
        case '+':
            console.log(add(num1, num2));
            break;
        case '-':
            console.log(subtract(num1, num2));
            break;
        case '/':
            console.log(divide(num1, num2));
            break;
        case '*':
            console.log(multiply(num1, num2));
            break;
    }
}

let button0 = document.querySelector('#zero');
button0.addEventListener('click', ()=>{
    if(display.textContent == '0')
        display.textContent = '0';
    else {
        display.textContent += `0`;
    }
})

let button1 = document.querySelector('#one');
button1.addEventListener('click', ()=>{
    if(display.textContent == '0')
        display.textContent = '1';
        else {
            display.textContent += `1`;
        }
    let totalAux = total.split(" ");
    totalAux = totalAux.map((string)=> string.trim());
    totalAux = totalAux.filter((string)=> string.length>=1);
    if(totalAux.length == 2)
        display.textContent = `1`;
})

let button2 = document.querySelector('#two');
button2.addEventListener('click', ()=>{
    if(display.textContent == '0')
        display.textContent = '2';
    else {
        display.textContent += `2`;
    }
})

let button3 = document.querySelector('#three');
button3.addEventListener('click', ()=>{
    if(display.textContent == '0')
        display.textContent = '3';
    else {
        display.textContent += `3`;
    }
})

let button4 = document.querySelector('#four');
button4.addEventListener('click', ()=>{
    if(display.textContent == '0')
        display.textContent = '4';
    else {
        display.textContent += `4`;
    }
})

let button5 = document.querySelector('#five');
button5.addEventListener('click', ()=>{
    if(display.textContent == '0')
        display.textContent = '5';
    else {
        display.textContent += `5`;
    }
})

let button6 = document.querySelector('#six');
button6.addEventListener('click', ()=>{
    if(display.textContent == '0')
        display.textContent = '6';
    else {
        display.textContent += `6`;
    }
})

let button7 = document.querySelector('#seven');
button7.addEventListener('click', ()=>{
    if(display.textContent == '0')
        display.textContent = '7';
    else {
        display.textContent += `7`;
    }
})

let button8 = document.querySelector('#eight');
button8.addEventListener('click', ()=>{
    if(display.textContent == '0')
        display.textContent = '8';
    else {
        display.textContent += `8`;
    }
})

let button9 = document.querySelector('#nine');
button9.addEventListener('click', ()=>{
    if(display.textContent == '0')
        display.textContent = '9';
    else {
        display.textContent += `9`;
    }
})

let buttonClear = document.querySelector('#clear');
buttonClear.addEventListener('click', ()=>{
    display.textContent = 0;
    total = '';
})

let buttonAdd = document.querySelector('#add');
buttonAdd.addEventListener('click', ()=>{
    total += display.textContent;
    console.log(total)
    if(verifyChange()){
        total += ' + ';
    } else {
        calculateString();
    }    
})

let buttonErase = document.querySelector('#erase');
buttonErase.addEventListener('click', ()=>{
    display.textContent = (display.textContent).substring(0, (display.textContent).length-1);
    if((display.textContent).length == 0){
        display.textContent = 0;
    }
})

//string.substring(0,string.length-1);