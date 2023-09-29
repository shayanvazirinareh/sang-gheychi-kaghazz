'use strict';
let $=document;
let body=$.querySelector('body');
let score=$.querySelector('.score');
let text=$.querySelector('.text');
let btn=$.querySelector('.button');
let span=$.querySelector('.span');
let p=$.querySelector('.p');
let threeModall=['قیچی','کاغذ','سنگ'];
let testMod;
testMod=Math.floor(Math.random()*threeModall.length);
let result=threeModall[testMod]
function btnclick () {
    if(text.value==='1'){
        if(result=='کاغذ'){
        p.innerHTML='درست '+result;
        p.style.background='green';
        span.innerHTML++;
            text.value='';
    }else{
        p.innerHTML='اشتباه '+result;
        p.style.background='red';
        p.style.color='white';
        span.innerHTML--;
            text.value='';
    }
   }else if(text.value==='2'){
    if(result=='قیچی'){
    p.innerHTML='درست '+result;
    p.style.background='green';
    span.innerHTML++;
        text.value='';
}else{
    p.innerHTML='اشتباه '+result;
    p.style.background='red';
    p.style.color='white';
    span.innerHTML--;
        text.value='';
}
}else if(text.value==='3'){
    if(result=='سنگ'){
    p.innerHTML='درست '+result;
    p.style.background='green';
    span.innerHTML++;
        text.value='';
}else{
    p.innerHTML='اشتباه '+result;
    p.style.background='red';
    p.style.color='white';
    span.innerHTML--;
        text.value='';
}
}else if(text.value===''){
    p.innerHTML='لطفا فقط عدد وارد وخالی نباشد';
    p.style.background='red';
    p.style.color='white';
    span.innerHTML++;
        text.value='';
}else if(text.value<=0||text.value>=4){
    p.innerHTML='فقط عدد بین یک تا سه را وارد کنید';
    p.style.background='red';
    p.style.color='white';
    span.innerHTML--;
        text.value='';
}
}
btn.addEventListener('click',btnclick)
