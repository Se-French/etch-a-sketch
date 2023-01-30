//function to create the specified number of divs
function createDivs(numDivs){
    for (i=0; i<numDivs; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        document.getElementById('container').appendChild(square);
        square.style.backgroundColor = 'white';
    }
}
//button to get number of divs
const button = document.querySelector('button#howMany');
button.addEventListener('click', getGrid);

//function to create etch-a-sketch with specified number of divs
function getGrid(event){
    let rowCol;
    let number = prompt('How many squares per side would you like for the new grid?');

    if (number > 0 && number <= 100){
        rowCol = number;
        let numDivs = rowCol * rowCol;
        createDivs(numDivs);
    } else if (number > 100){
        alert('Woah, take it easy! Please choose a number less than 100!');
    } else if (number <= 0){
        alert('You can\'t sketch with no grid!');    
    } else if (number == undefined || number == null){
        alert('Please type a number!')
    } else {
        alert('Sorry, I don\'t think that\'s a number!')
    }

    //add style to make divs square
    document.getElementById('container').style.gridTemplateColumns = `repeat(${rowCol}, 1fr)`;
    document.getElementById('container').style.gridTemplateRows = `repeat(${rowCol}, 1fr)`;

    //change the color of divs on hover
    const allDivs = document.querySelectorAll('div.square');
    allDivs.forEach(div => div.addEventListener('mouseover', onHover));

    function onHover(event){
        event.target.style.backgroundColor = 'black';
    }

}