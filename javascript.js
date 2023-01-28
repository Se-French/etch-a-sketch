function createDivs(numDivs){
    for (i=0; i<numDivs; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        document.getElementById('container').appendChild(square);
    }
}

let rowCol = 16;
createDivs(rowCol * rowCol);