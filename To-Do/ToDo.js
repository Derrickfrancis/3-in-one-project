
const InputBox = document.getElementById('InputBox')
const addBtn = document.getElementById('addBtn')
const listContainer = document.getElementById('listContainer')

addBtn.addEventListener('click', function(){
    let task;

    if(InputBox.value === ''){
        window.alert('You need to write something')
    }
    else{
        document.createAttribute('li')
        task = document.createElement('li');
        task.textContent = InputBox.value;
        listContainer.appendChild(task);

       let remove = document.createElement('span')
       remove.textContent = '\u00d7'
       task.appendChild(remove)
    }
    InputBox.value = ""
    saveData()
})

listContainer.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked')
        saveData()
    }
    else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
        saveData()
    }
})

//   to save to the browser at any point there's a change in our code
// function saveData(){
//     localStorage.setItem('data', listContainer.innerHTML)
// }

// function showData(){
//     listContainer.innerHTML = localStorage.getItem('data')
// }

// showData()