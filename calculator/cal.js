 
 const inputText = document.getElementById('inputText');
 const valueBtn = document.querySelectorAll('.valuesBtn')
 const equallBtn = document.getElementById('equalBtn')
 const clearBtn = document.getElementById('clearBtn');
 const deBtn = document.getElementById('DeBtn')
 const calContainer = document.getElementById('calContainer')

let calculate = '';

 valueBtn.forEach(btn =>{
    btn.addEventListener('click', function(){
       calculate += btn.textContent;
       inputText.value = calculate
    })
})
 
equallBtn.addEventListener('click',function(){

    inputText.value = eval(calculate)
    calculate = inputText.value
})
clearBtn.addEventListener('click',function(){
    inputText.value = ''
    calculate = ''
});

deBtn.addEventListener('click',function(){
    calContainer.classList.toggle('dark')
})
// valueBtn.forEach(btn =>{
//     btn.addEventListener('click',function(){
//         btn.classList.toggle('dark')
//     })
// })