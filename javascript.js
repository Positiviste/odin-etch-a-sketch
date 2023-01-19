const grid = document.querySelector('#grid');

function createBox() {
    const box = document.createElement('span');
    box.className = 'box';
    grid.lastChild.appendChild(box);
}

function createRow() {
    const row = document.createElement('span');
    row.className = 'row';
    grid.appendChild(row);
}


function createGrid(row, column) {
    for (let x = 1; x <= row; x++) {
        createRow();
        for (let y = 1; y <= column; y++) {
            createBox();
        }
    }
}

// default size (rangée - colonne)
createGrid(10, 10);
listen();

// Paint in black on mouse enter
function listen () {
    const listBox = document.querySelectorAll('.box');
    Array.from(listBox).forEach(box => {
    box.addEventListener('mouseenter', function (box) {
        this.style.backgroundColor = '#000';
    });
});
}

// change grid size
let gridSize;
const gridSizeButton = document.getElementById('gridSizeButton');
gridSizeButton.addEventListener('click', () => {
    gridSize = prompt('Enter the size of the grid between 5 and 50, pretty please : ', '16')
    removeGrid();
    createGrid(gridSize, gridSize);
    listen();
}
);

//remove existing grid
function removeGrid () {
    everyBox = document.getElementById('grid');
    console.log(everyBox);
    while (everyBox.lastElementChild) {
        everyBox.removeChild(everyBox.lastElementChild);
      }
    console.log(everyBox);
}