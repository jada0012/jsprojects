const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")
const highscore = document.querySelector("#highscore")
const newgame = document.querySelector("#newgame")

let result = 0
let remaining = 10
let timerId = null
let highest = 0
let hitPosition


function randomSquare(){
    squares.forEach(square=> {
        square.classList.remove("mole")
    })
    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add("mole")
    hitPosition = randomSquare.id
    
}
squares.forEach(square=> {
    square.addEventListener("mousedown", ()=>{

        if (square.id === hitPosition){
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})
function moveMole(){
    
    timerId = setInterval(randomSquare, 400)
}

moveMole()

function timer(){
    remaining --
    timeLeft.textContent = remaining
    if (remaining == 0){
        clearInterval(countdownTimerID)
        clearInterval(timerId)
        
        alert("GAME OVER! Your score is " + result)
        
        if (result > highest){
            highscore.textContent = result
            alert("new high score!")
        }

        
    }
}


let countdownTimerID = setInterval(timer, 1000)
function newGame(){
    newgame.addEventListener("click", ()=>{
        remaining = 10
        timeLeft.textContent = remaining
        result = 0
        score.textContent = result
        clearInterval(timerId)
        moveMole()
        
    })
    
}
newGame()
