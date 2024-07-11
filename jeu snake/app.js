const canvas = document.getElementById("snake")
const context = canvas.getContext("2d")
const box = 32

let isPause = true
let direction = "right"
let food = { x: Math.floor(Math.random() * 15 + 1) * box, y: Math.floor(Math.random() * 15 + 1) * box }
let snake = []
snake[0] = { x: 8 * box, y: 8 * box }

function initializeCanvas () {
    context.fillStyle = "#2a2a2a"
    context.fillRect(0, 0, 16 * box, 16 * box)
}

function drawSnake () {
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = "#9c27b0"
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function checkCollision () {
    if (snake[0].x > (15 * box) && direction == "right") snake[0].x = 0
    else if (snake[0].x < 0 && direction == "left") snake[0].x = (16 * box)
    else if (snake[0].y > (15 * box) && direction == "down") snake[0].y = 0
    else if (snake[0].y < 0 && direction == "up") snake[0].y = (16 * box)
}

function drawFood () {
    context.fillStyle = "#4c4c4c"
    context.fillRect(food.x, food.y, box, box)
}

function toEat() {
    if (snake[0].x == food.x && snake[0].y == food.y) {
        // snake.unshift({ x: box, y: box })
        food = { x: Math.floor(Math.random() * 15 + 1) * box, y: Math.floor(Math.random() * 15 + 1) * box }
        return;
    }
    
    snake.pop()
}

function checkGameOver() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(game)
            alert("pas mal pour un mortel bebou :))")
            snake = []
            snake[0] = { x: 8 * box, y: 8 * box }
            game = setInterval(initGame, 100)
        }
    }
}

function start () {
    isPause = false
    document.getElementById("start").classList.add("hide")
    document.getElementById("pause").classList.remove("hide")
}

function pause () {
    isPause = true
    document.getElementById("pause").classList.add("hide")
    document.getElementById("start").classList.remove("hide")
}

document.addEventListener('keydown', update)

function update (event) {
    if (event.keyCode == 37 && direction != "right") direction = "left"
    else if (event.keyCode == 38 && direction != "down") direction = "up"
    else if (event.keyCode == 39 && direction != "left") direction = "right"
    else if (event.keyCode == 40 && direction != "up") direction = "down"
}

function initGame() {
    if (!isPause) {
        checkCollision()
        checkGameOver() 
        initializeCanvas()
        drawSnake()
        drawFood()

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if (direction == "right") snakeX += box
        else if (direction == "left") snakeX -= box
        else if (direction == "up") snakeY -= box
        else if (direction == "down") snakeY += box

        toEat()
        let newHead = { x: snakeX, y: snakeY }
        snake.unshift(newHead)
    }
}

// let game = initGame()
let game = setInterval(initGame, 100)

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function connectSpotify() {
    // Ajouter le code pour se connecter à Spotify
    document.getElementById('player').innerHTML = `
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    `;
}

function connectDeezer() {
    // Ajouter le code pour se connecter à Deezer
    document.getElementById('player').innerHTML = `
        <iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=true&playlist=true&width=300&height=300&color=007FEB&layout=dark&size=medium&type=playlist&id=908622995&app_id=1" width="300" height="300"></iframe>
    `;
}

function connectYouTubeMusic() {
    // Ajouter le code pour se connecter à YouTube Music
    document.getElementById('player').innerHTML = `
        <iframe width="300" height="300" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;
}



