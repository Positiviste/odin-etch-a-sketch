const grid = document.querySelector('#grid');

function createGrid(row, column) {
    for (let x = 1; x <= row; x++) {
        createRow();
        for (let y = 1; y <= column; y++) {
            createBox();
        }
    }
}

function createRow() {
    const row = document.createElement('span');
    row.className = 'row';
    grid.appendChild(row);
}

function createBox() {
    const box = document.createElement('span');
    box.className = 'box';
    grid.lastChild.appendChild(box);
}

// default size (rangée - colonne)
createGrid(10, 10);
listen();

// Paint in black on mouse enter
function listen () {
    const listBox = document.querySelectorAll('.box');
    Array.from(listBox).forEach(box => {
    box.addEventListener('mouseenter', function (box) {
        const fillingStyle = document.getElementById("fillingStyle");
        if (fillingStyle.value === 'bw') {
            nb(this);
        } else if (fillingStyle.value === 'funky') {
            funky(this);
        } else if (fillingStyle.value === 'grayscale') {
            grayscale(this);
        }
    });
});
}

// change grid size
let gridSize;
const gridSizeButton = document.getElementById('gridSizeButton');
gridSizeButton.addEventListener('click', () => {
    gridSize = prompt('Enter the size of the grid (between 5 and 50 is advised), pretty please : ', '16')
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

function nb (element) {
    element.style.backgroundColor = '#000';
}

function funky (element) {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    element.style.backgroundColor = randomColor;
}

function grayscale (element) {
    let actualColor = element.style.backgroundColor;
    // console.log(actualColor);

    if (actualColor == 'rgb(200, 200, 200)') {
        console.log('1');
        element.style.backgroundColor = 'rgb(150, 150, 150)';
    } else if (actualColor == 'rgb(150, 150, 150)') {
        console.log('2');
        element.style.backgroundColor = 'rgb(100, 100, 100)';
    } else if (actualColor == 'rgb(100, 100, 100)') {
        console.log('2');
        element.style.backgroundColor = 'rgb(50, 50, 50)';
    } else if (actualColor == 'rgb(50, 50, 50)') {
        console.log('2');
        element.style.backgroundColor = 'rgb(0, 0, 0)';
    } else if (actualColor == 'rgb(0, 0, 0)') {
    } else {
        console.log('3');
        element.style.backgroundColor = 'rgb(200, 200, 200)';
    }
}

