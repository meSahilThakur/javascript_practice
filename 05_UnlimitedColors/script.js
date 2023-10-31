// for generating a random color hex
function randomColor(){
    const hex = '0123456789ABCDEF'   //hex is combination of 16 digit or chars
    let color = '#';

    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let colorInterval;

function startChangingColor(){

    if(!colorInterval){
    colorInterval = setInterval(changeBgColor, 1000);
    }

    function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
    document.querySelector('#current-hex').innerHTML = `<h2>Hex of the current Color is ${randomColor()}</h2>`
    }
}

function stopChangingColor(){
    clearInterval(colorInterval);
    colorInterval = null;
}
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

