const grid = document.getElementById('grid');
const DEFAULT_SIZE = 16

function makeGrid(){

    grid.style.gridTemplateColumns = `repeat(${DEFAULT_SIZE}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${DEFAULT_SIZE}, 1fr)`

    for(let i = 0; i < DEFAULT_SIZE * DEFAULT_SIZE; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        grid.appendChild(gridElement);
    }
}

makeGrid();