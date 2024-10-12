import './styles.css';

const gridSize = 4;
const gameContainer = document.getElementById('game');
const gnomeImage = require('./assets/gnome.png');

function createGameField() {
    const grid = document.createElement('div');
    grid.className = 'grid';

    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        grid.appendChild(cell);
    }

    gameContainer.appendChild(grid);
    return grid;
}

function moveGnome(grid) {
    const cells = grid.getElementsByClassName('cell');
    let currentPosition = Math.floor(Math.random() * cells.length);
    const gnome = document.createElement('img');
    gnome.src = gnomeImage;
    gnome.className = 'gnome';
    cells[currentPosition].appendChild(gnome);

    setInterval(() => {
        let newPosition;
        do {
            newPosition = Math.floor(Math.random() * cells.length);
        } while (newPosition === currentPosition);

        cells[newPosition].appendChild(gnome);
        currentPosition = newPosition;
    }, 1000); 
}

// Инициализация игры
const grid = createGameField();
moveGnome(grid);
