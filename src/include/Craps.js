class Bet {
  constructor(value, type) {
    this.value = value;
    this.type = type;
  }
}

class Craps {

  constructor() {
    this.app_state = {
      "point": null,
      "bank": 0,
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
    //console.log("Player rolled a " + this.app_state.lastRoll);
    this.payoutBets();
    //console.log("The current point is " + this.app_state.point);
    //this.movePoint();
    //this.payoutBets();
    return this.app_state;
  }
  movePoint() {
    if (this.app_state.point) {
      if (this.app_state.lastRoll === 7) {
        console.log("7 out!");
        this.app_state.point = null;
      } else if (this.app_state.lastRoll === this.app_state.point) {
        console.log("Point made");
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
    console.log("bets on the table: " + this.app_state.bets.length)
    for (let x = 0; x < this.app_state.bets.length; x++) {
      //let bet = this.bets[x];
      if (this.app_state.point) {
        // point established
        if (this.app_state.lastRoll === 7) {
          if (this.app_state.bets[x].type === "passline") {
            this.app_state.bets.splice(x, 1);
          }
        }
      } else {
        // come out roll
        if (this.app_state.lastRoll === 7) {
          if (this.app_state.bets[x].type === "passline") {
            this.app_state.bank += this.app_state.bets[x].value * 2;
            this.app_state.bets.splice(x, 1);
          }
        }
      }
    }
    console.log("The current bank is: " + this.app_state.bank);
    this.movePoint();
  }
}



export default Craps
