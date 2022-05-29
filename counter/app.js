let count = 0
const counterValue = document.getElementById("number")
const increase = document.getElementById("up")
const decrease = document.getElementById("down")
const reset = document.getElementById("reset")

increase.addEventListener("click", (e)=>{
    count = count + 1
    counterValue.innerHTML = count
})

decrease.addEventListener("click", (e)=>{
    count = count - 1
    counterValue.innerHTML = count
})

reset.addEventListener("click", (e)=>{
    count = 0
    counterValue.innerHTML = count
})