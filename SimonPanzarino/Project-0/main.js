var playGame = {
  turnCount: 0,
  playerOne: {
    name: "Player One",
    choices: [],
    won: 0
  },
  playerTwo: {
    name: "Player Two",
    choices: [],
    won: 0
  },
  takeTurn: function() {
    if (playGame.turnCount % 2 === 0) {
      console.log($(this).parent()[0].id);
      var $yourCell = $(this);
      $(this).parent().css("background-image", "url('images/cross.png')");
      $(this).addClass('fallOff');
      setTimeout(function() {
        $yourCell.css('visibility', 'hidden');
      }, 5000);
      playGame.turnCount++;
      playGame.playerOne.choices.push(parseInt($(this).parent()[0].id));
      // console.log(playGame.turnCount);
      playGame.checkForWin(playGame.playerOne);
    } else {
      console.log($(this).parent()[0].id);
      var $yourCell = $(this);
      $(this).addClass('fallOff');
      setTimeout(function() {
        $yourCell.css('visibility', 'hidden');
      }, 5000);
      playGame.turnCount++;
      playGame.playerTwo.choices.push(parseInt($(this).parent()[0].id));
      // console.log(playGame.turnCount);
      playGame.checkForWin(playGame.playerTwo);
    }
  },
  checkForWin: function(player) {
    if (player.choices.indexOf(1) >= 0 && player.choices.indexOf(2) >= 0 && player.choices.indexOf(3) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(4) >= 0 && player.choices.indexOf(5) >= 0 && player.choices.indexOf(6) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(7) >= 0 && player.choices.indexOf(8) >= 0 && player.choices.indexOf(9) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(1) >= 0 && player.choices.indexOf(4) >= 0 && player.choices.indexOf(7) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(2) >= 0 && player.choices.indexOf(5) >= 0 && player.choices.indexOf(8) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(3) >= 0 && player.choices.indexOf(6) >= 0 && player.choices.indexOf(9) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(1) >= 0 && player.choices.indexOf(5) >= 0 && player.choices.indexOf(9) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(3) >= 0 && player.choices.indexOf(5) >= 0 && player.choices.indexOf(7) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (this.turnCount === 9) {
      console.log("It's a draw!");
      this.clearBoard();
    }
  },
  clearBoard: function() {
    this.turnCount = 0;
    this.playerOne.choices = [];
    this.playerTwo.choices = [];
    $(document).off("click", ".inner");
    setTimeout(function() {
      $(".cell").css("background-image", "url('images/nought.png')");
      $(".inner").removeClass("fallOff");
      $(".inner").css("visibility", "visible");
      $(document).on("click", ".inner", playGame.takeTurn);
    }, 5000);
  }
}

var playAi = {
  turnCount: 0,
  playerOne: {
    name: "Player One",
    choices: [],
    won: 0
  },
  playerTwo: {
    name: "Computer",
    choices: [],
    won: 0
  },
  takenSquares: {
    taken: [],
    takenByYou: [],
    takenByAi: []
  },
  takeTurn: function() {
    if (playAi.turnCount % 2 === 0) {
      console.log(playAi.turnCount % 2);
      var $yourCell = $(this);
      console.log($(this));
      $(this).parent().css("background-image", "url('images/cross.png')");
      $(this).addClass('fallOff');
      setTimeout(function() {
        $yourCell.css('visibility', 'hidden');
      }, 5000);
      playAi.turnCount++;
      playAi.playerOne.choices.push(parseInt($(this).parent()[0].id));
      playAi.takenSquares.taken.push(parseInt($(this).parent()[0].id));
      playAi.takenSquares.takenByYou.push(parseInt($(this).parent()[0].id));
      // console.log(playGame.turnCount);
      playAi.checkForWin(playAi.playerOne);
      playAi.computerTurn();
    }
  },
  computerTurn: function() {
    if (this.playerOne.choices[this.playerOne.choices.length - 1] === 1) {
      console.log("you played top left");
      if (this.turnCount === 2) {
        console.log("Turn 2");
      }
      this.takenSquares.taken.push(5);
      setTimeout(function() {
        $('#5 .inner').addClass('fallOff');
        setTimeout(function() {
          $('#5 .inner').css('visibility', 'hidden');
        }, 5000);
      }, 5000);
    } else if (this.playerOne.choices[this.playerOne.choices.length - 1] === 2) {
      console.log("you played top middle");
    } else if (this.playerOne.choices[this.playerOne.choices.length - 1] === 3) {
      console.log("you played top right");
    } else if (this.playerOne.choices[this.playerOne.choices.length - 1] === 4) {
      console.log("you played middle left");
    } else if (this.playerOne.choices[this.playerOne.choices.length - 1] === 5) {
      console.log("you played middle middle");
      if (this.turnCount === 1) {
        console.log("Turn 2");
      }
      setTimeout(function() {
        $('#1 .inner').addClass('fallOff');
        setTimeout(function() {
          $('#1 .inner').css('visibility', 'hidden');
        }, 5000)
      }, 5000);
    } else if (this.playerOne.choices[this.playerOne.choices.length - 1] === 6) {
      console.log("you played middle right");
    } else if (this.playerOne.choices[this.playerOne.choices.length - 1] === 7) {
      console.log("you played bottom left");
    } else if (this.playerOne.choices[this.playerOne.choices.length - 1] === 8) {
      console.log("you played bottom middle");
    } else if (this.playerOne.choices[this.playerOne.choices.length - 1] === 9) {
      console.log("you played bottom right");
    }
    playAi.turnCount++;
    this.checkForWin(playAi.playerTwo);
  },
  checkForWin: function(player) {
    if (player.choices.indexOf(1) >= 0 && player.choices.indexOf(2) >= 0 && player.choices.indexOf(3) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(4) >= 0 && player.choices.indexOf(5) >= 0 && player.choices.indexOf(6) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(7) >= 0 && player.choices.indexOf(8) >= 0 && player.choices.indexOf(9) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(1) >= 0 && player.choices.indexOf(4) >= 0 && player.choices.indexOf(7) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(2) >= 0 && player.choices.indexOf(5) >= 0 && player.choices.indexOf(8) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(3) >= 0 && player.choices.indexOf(6) >= 0 && player.choices.indexOf(9) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(1) >= 0 && player.choices.indexOf(5) >= 0 && player.choices.indexOf(9) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (player.choices.indexOf(3) >= 0 && player.choices.indexOf(5) >= 0 && player.choices.indexOf(7) >= 0) {
      console.log(player.name + " Wins!");
      player.won++;
      this.clearBoard();
    } else if (this.turnCount === 9) {
      console.log("It's a draw!");
      this.clearBoard();
    }
  },
  clearBoard: function() {
    this.turnCount = 0;
    this.playerOne.choices = [];
    this.playerTwo.choices = [];
    $(document).off("click", ".inner");
    setTimeout(function() {
      $(".cell").css("background-image", "url('images/nought.png')");
      $(".inner").removeClass("fallOff");
      $(".inner").css("visibility", "visible");
      $(document).on("click", ".inner", playAi.takeTurn);
    }, 5000);
  }
}

$(document).on("click", ".inner", playAi.takeTurn);
