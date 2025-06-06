
 const generateBtn = document.getElementById('generateBtn');
 const welcome = document.getElementById('welcome')

 generateBtn.addEventListener('click',()=>{

    const letter = '0123456789ABCDEF';
    let colors = "#";
    for(let i = 0; i < 6; i ++){
        colors += letter[Math.floor(Math.random() * 16)];
    }
    // return colors;

    welcome.style.color = colors
    welcome.textContent = `Color:${colors}`
    // document.body.style.backgroundColor =colors
 })