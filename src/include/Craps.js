class Bet {
  constructor(value, type) {
    this.value = value;
    this.type = type;
    this.remove = false;
  }
  removeBet() {
    this.remove = true;
  }
}

class Craps {

  constructor() {
    this.app_state = {
      "point": null,
      "bank": 100,
      "bets": [],
      "lastRoll": null,
      "rolls": [],
      "message": ""
    }
  }
  getState() {
    return this.app_state;
  }
  addFunds(funds) {
    this.app_state.bank += funds;
    return this.app_state;
  }
  placeBet(value, type) {
    let bet = new Bet(value, type);
    this.app_state.bets.push(bet);
    this.app_state.bank -= value;
    return this.app_state;
  }
  roll() {
    //console.log("Bank: " + this.bank);
    let roll = [];
    roll.push(Math.floor((Math.random() * 6 + 1)));
    roll.push(Math.floor((Math.random() * 6 + 1)));
    this.app_state.rolls.push(roll);
    this.app_state.lastRoll = roll[0] + roll[1];
    let sum = roll[0] + roll[1];
    this.app_state.message = "You rolled a " + sum;
    this.payoutBets();
    return this.app_state;
  }
  sweepBets() {
    let x = this.app_state.bets.length;
    while (x--) {

      if (this.app_state.bets[x].remove) {
        this.app_state.bank += this.app_state.bets[x].value;
        this.app_state.bets.splice(x, 1);
      }

    }
  }
  updateBoard() {
    if (this.app_state.point) {
      if (this.app_state.lastRoll === 7) {
        this.app_state.point = null;
      } else if (this.app_state.lastRoll === this.app_state.point) {
        this.app_state.point = null;
      }
    } else {
      let lastRoll = this.app_state.lastRoll;
      switch (lastRoll) {
        case 7:
        break;
        case 11:
        break;
        case 2:
        break;
        case 3:
        break;
        case 12:
        break;
        default:
          // numbers that can make points
          this.app_state.point = lastRoll;
      }
    }
  }
  payoutBets() {
    let x = this.app_state.bets.length;

    while (x--) {
      if (this.app_state.point) {
        // POINT ESTABLISHED

        if (this.app_state.lastRoll === 7) {
          if (this.app_state.bets[x].type === "passline") {
            this.app_state.bets[x].value = 0;
            this.app_state.bets[x].removeBet();
          }
        }
        if (this.app_state.lastRoll === this.app_state.point) {
          console.log("im here now point made");
          if (this.app_state.bets[x].type === "passline") {
            this.app_state.bets[x].value = this.app_state.bets[x].value * 2;
            this.app_state.bets[x].removeBet();
          }
        }
      } else {
        // COME OUT ROLL
        if (this.app_state.lastRoll === 7 || this.app_state.lastRoll === 11) {
          if (this.app_state.bets[x].type === "passline") {
            this.app_state.bets[x].value = this.app_state.bets[x].value *2;
            this.app_state.bets[x].removeBet();
          }
        }
        if (this.app_state.lastRoll === 2 || this.app_state.lastRoll === 3 || this.app_state.lastRoll === 12) {
          if (this.app_state.bets[x].type === "passline") {
            this.app_state.bets[x].value = 0;
            this.app_state.bets[x].removeBet();
          }
        }
      }
    }
    this.sweepBets();
    this.updateBoard();
  }
}

export default Craps
