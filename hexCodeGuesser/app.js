let redVal = 0
let blueVal = 0
let greenVal = 0
let redNumber
let greenNumber
let blueNumber

let validate = document.getElementById("validate")
const button1 = document.getElementById("change")
const heading = document.querySelector(".score")

let redP = document.getElementById("nearRed")
let greenP = document.getElementById("nearGreen")
let blueP = document.getElementById("nearBlue")
function switchColours(){
    redVal = Math.floor(Math.random() * 255)
    blueVal = Math.floor(Math.random() * 255)
    greenVal = Math.floor(Math.random() * 255)   
    console.log({redVal,greenVal,  blueVal}) 
    document.body.style.backgroundColor="rgb(" + redVal + "," + greenVal + "," + blueVal + ")";
}

button1.addEventListener("click", switchColours)

validate.addEventListener("click", ()=>{
    blueNumber = document.getElementById("blue").value
    redNumber = document.getElementById("red").value
    greenNumber = document.getElementById("green").value
    //i could use reduce functions and queryselector all here but we're working on functionality first then clean code later lol
    if (redNumber > redVal){
        redP.innerText = "red too high"
    }
    if (redNumber < redVal){
        redP.innerText = "red too low"
    }
    if (redNumber == redVal){
        redP.innerText = "correct!"
    }
    if (greenNumber > greenVal){
        greenP.innerText = "green too high"
    }
    if (greenNumber < greenVal){
        greenP.innerText = "green too low"
    }
    if (greenNumber == greenVal){
        greenP.innerText = "correct!"
    }
    if (blueNumber > blueVal){
        blueP.innerText = "blue too high"
    }
    if (blueNumber < blueVal){
        blueP.innerText = "blue too low"
    }
    if (blueNumber == blueVal){
        blueP.innerText = "correct!"
    }
   
    if(redNumber == redVal && greenNumber==greenVal && blueNumber == blueVal){
        alert("you got it!")
        switchColours()
    }
  
})

