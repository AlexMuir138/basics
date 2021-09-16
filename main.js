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

function startClock(){
  timeRemaining = gameLength
  drawClock()
  clockId = setInterval(drawClock, 1000)
}

function stopClock(){
  clearInterval(clockId)
}

function drawClock(){
  let countdownElem = document.getElementById('countdown')
  countdownElem.innerText = (timeRemaining / 1000).toString()
  timeRemaining -= 1000
}

function inflate() {
  clickCount++
  height += inflationRate
  width += inflationRate
  checkBalloonPop()
  draw()
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