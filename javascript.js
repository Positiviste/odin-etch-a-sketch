const grid = document.querySelector('#grid');

function createBox () {
    const box = document.createElement('span');
    box.className = 'box';
    grid.lastChild.appendChild(box);
}

function createRow () {
    const row = document.createElement('span');
    row.className = 'row';
    grid.appendChild(row);
}


function createGrid (row, column) {
    for (let x = 1 ; x <= row ; x++) {
        createRow();
        for (let y = 1 ; y <= column ; y++){
            createBox();
        }
    }
}

// rangée - colonne
createGrid(5,10);

