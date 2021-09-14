// DATA
let clickCount = 0 
let height = 120
let width = 100
let inflationRate = 20
let maxsize = 300
let highestPopCount = 0
let currentPopCount = 0
let gameLength = 10000
let clockId = 0
let timeRemaining = 0
let currentPlayer = {}
let currentColor = "red"
let possibleColors = ["red", "green", "blue", "purple", "pink"]

function startGame(){
document.getElementById("game-controls").classList.remove("hidden")
document.getElementById("main-controls").classList.add("hidden")
document.getElementById("scoreboard").classList.add("hidden")

startClock()
  setTimeout(stopGame, gameLength)
}