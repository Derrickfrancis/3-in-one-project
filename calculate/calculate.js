const displayText = document.getElementById('displayText');
const clearBtn = document.getElementById('clearBtn')
const equalBtn = document.getElementById('equalBtn')
const Buttons = document.querySelectorAll('.btn');
const calBody = document.getElementById('cal')


Buttons.forEach(btn => {
    btn.addEventListener('click', function () {
        displayText.value += btn.textContent
    })
});

equalBtn.addEventListener('click', function () {
    displayText.value = eval(displayText.value)
});

clearBtn.addEventListener('click', function () {
    displayText.value = '';
})

document.getElementById('derrick').addEventListener('click',function(){
    calBody.classList.toggle('dark').textContent
    displayText.value = '';
})