const grid = document.getElementById('grid');
const slider = document.getElementById('myRange')
const gridVal = document.getElementById('sizeText')

const DEFAULT_SIZE = 16
gridVal.innerHTML = `${DEFAULT_SIZE} x ${DEFAULT_SIZE}`

function makeGrid(){

    grid.style.gridTemplateColumns = `repeat(${DEFAULT_SIZE}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${DEFAULT_SIZE}, 1fr)`

    for(let i = 0; i < DEFAULT_SIZE * DEFAULT_SIZE; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        grid.appendChild(gridElement);
    }
}

slider.oninput = function() {
    gridVal.innerHTML = `${this.value} x ${this.value}`
}

makeGrid();