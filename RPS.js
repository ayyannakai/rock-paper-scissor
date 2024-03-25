let btn = document.querySelectorAll(".button");
let result = document.querySelector(".result");
let yourScore = document.querySelector(".myScore");
let cpuScore = document.querySelector(".cpuScore");
let newGame = document.querySelector(".restart")
let heading = document.querySelector('.afterGame')
let ourScore = document.querySelector('.ourScore')
let score1 = 0;
let score2 = 0;
let choice;

const cpu = {
  1: "rock",
  2: "paper",
  3: "scissor",
};

function won() {
    btn.forEach(element => {
        
        element.style.display = "none";
        result.style.display = "none";
        yourScore.style.display = "none";
        cpuScore.style.display = "none";
        newGame.style.display = 'flex'
        heading.style.display = 'flex'
        ourScore.style.display = 'none'
        yourScore.innerText = 0
        cpuScore.innerText = 0
        score1 = 0
        score2 = 0
        result.innerText = 'Good luck'

    });
}
newGame.addEventListener('click',()=>{
    newGames()
})
function newGames(){
    btn.forEach(element => {
        
        element.style.display = "flex";
        result.style.display = "flex";
        yourScore.style.display = "flex";
        cpuScore.style.display = "flex";
        newGame.style.display = 'none'
        heading.style.display = 'none'
        ourScore.style.display = 'flex'
    
    });
}

function counterCheck() {
  if (score1 === 7) {
    result.innerText = "You won the game";
    won()

  } else if (score2 === 7) {
    result.innerText = "You lost the game";
    heading.innerText = 'You lost the game'
    won()
 
  }
}

btn.forEach((btnn) => {
  btnn.addEventListener("click", () => {
    choice = btnn.alt;
    let random = Math.ceil(Math.random() * 3);
    // console.log(random);
    for (obj in cpu) {
      var element = cpu[random];
      // console.log(element);
      break;
    }
    if (element == "rock" && choice == "rock") {
      result.innerText = "its a draw, CPU chose rock";
    } else if (element == "paper" && choice == "paper") {
      result.innerText = "its a draw, CPU chose paper";
    } else if (element == "scissor" && choice == "scissor") {
      result.innerText = "its a draw, CPU chose scissors";
    } else if (element == "scissor" && choice == "rock") {
      result.innerText = "you won, Cpu chose scissors";
      score1 = score1 + 1;
      yourScore.innerText = score1;
      counterCheck();
    } else if (element == "scissor" && choice == "paper") {
      result.innerText = "you lost, CPU chose scissors";
      score2 = score2 + 1;

      cpuScore.innerText = score2;
      counterCheck();
    } else if (element == "rock" && choice == "paper") {
      result.innerText = "you won, CPU chose rock";
      score1 = score1 + 1;

      yourScore.innerText = score1;
      counterCheck();
    } else if (element == "rock" && choice == "scissor") {
      result.innerText = "cpu won, CPU chose rock";
      score2 = score2 + 1;
      cpuScore.innerText = score2;
      counterCheck();
    } else if (element == "paper" && choice == "scissor") {
      result.innerText = "you won, CPU chose paper";
      score1 = score1 + 1;

      yourScore.innerText = score1;
      counterCheck();
    } else if (element == "paper" && choice == "rock") {
      result.innerText = "cpu won, CPU chose paper";
      score2 = score2 + 1;
      cpuScore.innerText = score2;
      counterCheck();
    }
  });
});
