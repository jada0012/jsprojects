const cardArray  =[
    {
        name:'fries',
        img:"/memoryGame/images/fries.png",
    },
    {
        name:'cheeseburger',
        img:"/memoryGame/images/cheeseburger.png",
    },
    {
        name:'hotdog',
        img:"/memoryGame/images/hotdog.png",
    },
    {
        name:'ice-cream',
        img:"/memoryGame/images/ice-cream.png",
    },
    {
        name:'milkshake',
        img:"/memoryGame/images/milkshake.png",
    },
    {
        name:'pizza',
        img:"/memoryGame/images/pizza.png",
    },
    {
        name:'fries',
        img:"/memoryGame/images/fries.png",
    },
    {
        name:'cheeseburger',
        img:"/memoryGame/images/cheeseburger.png",
    },
    {
        name:'hotdog',
        img:"/memoryGame/images/hotdog.png",
    },
    {
        name:'ice-cream',
        img:"/memoryGame/images/ice-cream.png",
    },
    {
        name:'milkshake',
        img:"/memoryGame/images/milkshake.png",
    },
    {
        name:'pizza',
        img:"/memoryGame/images/pizza.png",
    },


]
let cardsChosen =[]
let cardsChosenIds = []
const cardsWon = []
cardArray.sort( ()=>0.5 - Math.random()) //compares values and sorts through it, idk how it works
const gridDisplay = document.querySelector("#grid")


function createBoard() {
    for (let i = 0; i <cardArray.length; i++){
        const card = document.createElement("img")
        card.setAttribute("src", "/memoryGame/images/blank.png")
        card.setAttribute("data-id", i)
        card.addEventListener('click', flipCard) //brackets arent being used cuz i'm not actually calling the function, i'm just doing a callback (whatever that means)
        gridDisplay.appendChild(card)
        console.log(card, i)
    }

}
function checkMatch(){
    const cards = document.querySelectorAll("img")
    const Score = document.getElementById("result")
    console.log("check for match!!")
    if (cardsChosen[0] === cardsChosen[1]){
        alert("match found!!!!")
        cards[cardsChosenIds[0]].setAttribute('src', '/memoryGame/images/white.png')
        cards[cardsChosenIds[1]].setAttribute('src', '/memoryGame/images/white.png')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
        Score.innerHTML= cardsWon.length
    }else{
        alert("sorry try again. ")
        cards[cardsChosenIds[0]].setAttribute('src', '/memoryGame/images/blank.png')
        cards[cardsChosenIds[1]].setAttribute('src', '/memoryGame/images/blank.png')
    }
    
    cardsChosen = []
    cardsChosenIds = []
    if (cardsWon.length === (cardArray.length)/2){
        alert("you have won the game!")
    }
}
createBoard()
function flipCard(){
    console.log(cardArray) 
    
    const cardId = this.getAttribute("data-id") //not really sure what the this function means, even after reading mozilla docs, but it allows us to use methods on it and get attributes from teh called item (in this case the one that was clicked, since it's called on the event listener)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2){
        setTimeout( checkMatch, 500)
    }

    

    //when a card is clicked on, it gets the card id, adds the name of the clicked card to the chosen array, and changes the image to one that corresponds to the id

}