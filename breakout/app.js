const grid = document.querySelector(".grid")
const scoreDisplay = document.querySelector(".score")
const blockWidth = 100
const blockHeight = 20
const userStart = [230, 10]
const boardWidth = 560
const boardHeight = 300
const startButton = document.querySelector("#start")
let currentPosition = userStart
let timerID
let ballWidth = 20
let ballHeight = 20
let xDirection = -2
let yDirection = 2
let score = 0

const ballStart = [270, 40]
let currentBallPos = ballStart

class Block{
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}
// there must be a better way than this but i dont know any better so
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
    
]
console.log(blocks[1])
function addBlock(){
    

    for(let i = 0; i< blocks.length; i++){
        const block = document.createElement("div") 
        block.classList.add("block")
        block.style.left = blocks[i].bottomLeft[0] + "px"
        block.style.bottom = blocks[i].bottomLeft[1] + "px"
        grid.appendChild(block)
    }
    
}
addBlock()

function drawUser(){
    user.style.left = currentPosition[0] + "px"
    user.style.bottom =  currentPosition[1] + "px"
}

const user = document.createElement("div")
user.classList.add("user")
drawUser()
grid.appendChild(user)

function moveUser(e){
    switch(e.key){
        case "ArrowLeft":
            if(currentPosition[0] > 0){
                currentPosition[0]-= 10
                drawUser()    
            }
            break;
        case "ArrowRight":
            if(currentPosition[0] < boardWidth- blockWidth ){
                currentPosition[0] += 10
                drawUser()
            }
            break;
    }
}

document.addEventListener("keydown", moveUser)

function drawBall(){
    ball.style.left = currentBallPos[0] + "px"
    ball.style.bottom = currentBallPos[1] + "px"
}

const ball = document.createElement("div")
ball.classList.add("ball")
drawBall()
grid.appendChild(ball)

function moveBall(){
    currentBallPos[0] += xDirection
    currentBallPos[1] += yDirection
    drawBall()
    detectCollision()
    
}
startButton.addEventListener("click", ()=>{
    timerID = setInterval(moveBall, 10)

})

function detectCollision(){
    //block collision: loops through all blocks, sees if it's between the coords
    for(let i=0; i<blocks.length; i++){
        if (currentBallPos[0] > blocks[i].bottomLeft[0] && currentBallPos[0] < blocks[i].bottomRight[0] && (currentBallPos[1] + ballHeight) > blocks[i].bottomLeft[1] && currentBallPos[1] < blocks[i].topLeft[1]){
            const listBlocks = Array.from(document.querySelectorAll(".block")) //make sure you write class names properly :moyai:
            listBlocks[i].classList.remove("block")
            blocks.splice(i, 1)
            changeDirection()
            score++
            scoreDisplay.textContent = score
        }
        if (blocks.length === 0){
            scoreDisplay.textContent = "you win!"
            clearInterval(timerID)
        }

    }
    //usercoords
    if(currentBallPos[0] > currentPosition[0] && currentBallPos[0] < (currentPosition[0] + blockWidth) && currentBallPos[1] > currentPosition[1] && currentBallPos[1] < currentPosition[1] + blockHeight){
        changeDirection()
    }

    //wall collision
    if (currentBallPos[0] >= boardWidth - ballWidth || currentBallPos[1] >= boardHeight - ballWidth || currentBallPos[0] <= 0){
        changeDirection()
    }
    if(currentBallPos[1] <= 0){
        clearInterval(timerID)
        scoreDisplay.textContent = "L + ratio + cope"
        document.removeEventListener("keydown", moveUser)
    }
}
function changeDirection(){
    if (xDirection === 2 && yDirection === 2){
        yDirection = -2
        return
    }
    if (xDirection === 2 && yDirection === -2){
        xDirection = -2
        return
    }
    if (xDirection === -2 && yDirection === 2){
        xDirection = 2

    }
    if (xDirection === -2 && yDirection === -2){
        yDirection = 2

    }
}
