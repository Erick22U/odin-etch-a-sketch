const grid = document.getElementById('grid');
const slider = document.getElementById('myRange')
const gridVal = document.getElementById('sizeText')
const restart = document.getElementById('restart')

const DEFAULT_SIZE = 16
gridVal.innerHTML = `${DEFAULT_SIZE} x ${DEFAULT_SIZE}`;

function changeColor(e){
    e.target.style.backgroundColor = 'black'
}

function makeGrid(size){

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(let i = 0; i < size * size; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');

        gridElement.addEventListener('mouseover', changeColor)
        grid.appendChild(gridElement);
    }
}

function clearGrid(){
    grid.innerHTML = "";
}

slider.oninput = function() {
    gridVal.innerHTML = `${this.value} x ${this.value}`
    clearGrid();
    makeGrid(this.value);
}

function eraseGrid(){
 const gridElement = document.getElementsByClassName('grid-element')
 for(let i = 0; i < gridElement.length; i++)
    gridElement[i].style.backgroundColor = 'white'
}

window.onload = makeGrid(DEFAULT_SIZE);
restart.addEventListener('click', eraseGrid);