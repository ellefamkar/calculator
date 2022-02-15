const log = console.log.bind(document);
const displayBox = document.querySelector('.display');
const clearAll = document.querySelector('.all-clear');
const clearLast = document.querySelector('.clear-last');
const list = document.querySelectorAll('.show-display');
const calculateitems = document.querySelector('.calculate');

function showDisplay(event){
    const value = event.target.innerText;
    if(displayBox.innerHTML == 0 ){
        displayBox.innerHTML = value;
    }else{
        displayBox.innerHTML += value;
    }
}

function calculate(){
const result = displayBox.innerText;
displayBox.innerText = eval(result);
}

function allClear(){
    displayBox.innerText = 0;
}

function clearLastItem(){
    const value = displayBox.innerText;
    if(value.length === 1){
        displayBox.innerText = 0;
    }else{
        displayBox.innerText = value.substring(0,  value.length - 1);
    }
}

calculateitems.addEventListener('click',calculate);
clearAll.addEventListener('click', allClear);
clearLast.addEventListener('click', clearLastItem);

list.forEach((item)=>{
    item.addEventListener('click',showDisplay);
});




































// const displayBox = document.querySelector(".display");
// const list = document.querySelectorAll(".show-display");

// function showDisplay(event) {
//    const x = event.target.innerText;
//    if (displayBox.innerHTML == 0) {
//       return displayBox.innerHTML = x;
//    }
//    return displayBox.innerHTML += x;
// }


// list.forEach((item) => {
//     item.addEventListener("click", showDisplay);
//  });
 

// document.querySelector('.calculate').addEventListener('click',calculate);
// function calculate(){
//     let result = displayBox.innerText;
//     displayBox.innerText = eval(result);
// };

// document.querySelector('.all-clear').addEventListener('click',allClear);
// function allClear(){
// displayBox.innerText = 0;
// };

// document.querySelector('.clear-last').addEventListener('click',singleClear);

// function singleClear(){
// let text = displayBox.innerText;
// if(text.length === 1 ){
//     displayBox.innerText = 0;
// }else{
//     displayBox.innerText = text.substring(0, text.length -1);
// }
// }

