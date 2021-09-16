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

function stopGame(){
  console.log("GAME OVER")

  document.getElementById("main-controls").classList.remove("hidden")
  document.getElementById("game-controls").classList.add("hidden")
  document.getElementById("scoreboard").classList.remove("hidden")

  clickCount = 0
  height = 120
  width = 100
}
function draw(){
  let balloonElement = document.getElementById("balloon")
  let clickCountElem = document.getElementById("click-count")
  let popCountElem = document.getElementById("pop-count")
  let highPopCountElem = document.getElementById("high-pop-count")
  
  let playerNameElem = document.getElementById('player-name')


  balloonElement.style.height = height + "px"
  balloonElement.style.width = width + "px"
  
  clickCountElem.innerText = clickCount.toString()
  popCountElem.innerText = currentPopCount.toString()
  highPopCountElem.innerText = currentPlayer.topScore.toString()

  playerNameElem.innerText = currentPlayer.name

}
function changePlayer(){
  document.getElementById("player-form").classList.remove("hidden")
  document.getElementById("game").classList.add("hidden")
}

function savePlayers(){
  window.localStorage.setItem("players", JSON.stringify(players))
}

function loadPlayers(){
  let playersData = JSON.parse(window.localStorage.getItem("players"))
  if (playersData) {
    players = playersData
  }
}
function drawScoreboard(){
  let template = ""

  players.sort((p1, p2) => p2.topScore - p1.topScore)
  players.forEach(player => {
    template += `
    <div class="d-flex space-between">
        <span>
          <i class="fa fa-user"></i>
         ${player.name}
        </span>
        <span>Score: ${player.topScore}</span>
      </div>
    `
  })

  document.getElementById("players").innerHTML = template
}

drawScoreboard()