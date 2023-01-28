function createDivs(numDivs){
    for (i=0; i<numDivs; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        document.getElementById('container').appendChild(square);
    }
}

let rowCol = 16;
createDivs(rowCol * rowCol);


//change the color of divs on hover
const allDivs = document.querySelectorAll('div.square');
console.log(allDivs);
allDivs.forEach(div => div.addEventListener('mouseover', onHover));

function onHover(event){
    event.target.style.backgroundColor = 'black';
}

