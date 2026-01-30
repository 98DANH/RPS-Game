console.log(
  "Soy Optimus Prime, y envío este mensaje a cualquier programador sobreviviente de la insertidumbre de aprender en tiempos de IA. Estamos aquí... y seguimos aprendiendo.",
);
console.log(
  "I am Optimus Prime, and I send this message to any programmer who has survived the uncertainty of learning in the age of AI. We are here... and we are still learning.",
);
console.log(
  "Ich bin Optimus Prime und sende diese Nachricht an alle Programmierer, die die Unsicherheit des Lernens im Zeitalter der KI überstanden haben. Wir sind hier … und wir lernen immer noch.",
);

function getHumanChoice() {
  let message = `
    Select number, please:
    1 - Rock
    2 - Papper
    3 - Scissor
    `;
  playerSelect = window.prompt(message);
  if (playerSelect < 1 || playerSelect > 3) {
    console.log("Invalid choice");
    return getHumanChoice();
  }
  return parseInt(playerSelect, 10);
}

function getComputer() {
  let player = Math.floor(Math.random() * 3);
  return parseInt(player + 1, 10);
}

function goGame(userPlayer, pcPlayer) {
  // función retorna 1 si el usuario pierde, y 2 si gana (caso de empate retorna 0)
  if (userPlayer == pcPlayer) {
    return 0;
  } else {
    let result;
    switch (userPlayer) {
      case 1:
        result = pcPlayer == 2 ? 1 : 2;
        break;
      case 2:
        result = pcPlayer == 3 ? 1 : 2;
        break;
      case 3:
        result = pcPlayer == 1 ? 1 : 2;
        break;
      default:
        result = "invalid choice";
    }
    return result;
  }
}

function main() {
  let pcPoint = 0;
  let userPoint = 0;
  let winner;
  while (pcPoint < 5 && userPoint < 5) {
    winner = goGame(getHumanChoice(), getComputer());
    if (winner === 0) {
      alert("It's a draw");
    }
    switch (winner) {
      case 1:
        pcPoint++;
        alert("You lose!");
        break;
      case 2:
        userPoint++;
        alert("You win!");
        break;
      case 3:
        alert("Invalid choice");
        break;
    }
    alert(`PC: ${pcPoint} - User: ${userPoint}`);
    winner = NaN;
  }
  if (pcPoint === 5) {
    alert("You lose!x5");
  } else {
    alert("You real win!");
  }
  return 0;
}

main();
