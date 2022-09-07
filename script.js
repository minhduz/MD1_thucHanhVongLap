let fast = document.getElementById('fast')
let isFast = false
let good = document.getElementById('good')
let isGood = false
let cheap = document.getElementById('cheap')
let isCheap = false

function change1(){
    isFast = !isFast;
    if (isFast){
        fast.value = 5;
    } else {
        fast.value = 0;
    }
    if(isFast&&isGood){
        isCheap = false
        cheap.value = 0;
    }
}
function change2(){
    isGood = !isGood;
    if (isGood){
        good.value = 5;
    } else {
        good.value = 0;
    }
    if(isGood&&isCheap){
        isFast = false
        fast.value = 0;
    }
}
function change3(){
    isCheap = !isCheap;
    if (isCheap){
        cheap.value = 5;
    } else {
        cheap.value = 0;
    }
    if(isCheap&&isFast){
        isGood = false
        good.value = 0;
    }
}