
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
const num = document.getElementById('num')

let count = 0;

decreaseBtn.addEventListener('click',function(){
    count--
    num.textContent = count
});

resetBtn.addEventListener('click',function(){
 count = 0
 num.textContent = count
});

increaseBtn.addEventListener('click',function(){
    count++
    num.textContent = count
})