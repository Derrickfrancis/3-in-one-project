
const hambuger = document.getElementById('hambuger')
const list = document.getElementById('list')
const remove = document.getElementById('remove');


hambuger.addEventListener('click',function(){
        list.style.display = 'block'
       let show = remove.style.display = 'block'
        hambuger.style.display = 'none'
});

remove.addEventListener('click',function(){
    list.style.display = 'none'
    hambuger.style.display = 'block'
    remove.style.display = 'none'
})