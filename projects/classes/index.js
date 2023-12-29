class Gamer {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  incrementScore() {
    this.score++;
  }
  decrementScore() {
    this.score--;
  }
}

class Character {
  constructor(name) {
    this.name = name;
    this.collectedItemsArr = [];
  }
  addItem(item) {
    this.collectedItemsArr.push(item);
    console.log(`${this.name} now has: ${this.collectedItemsArr.join(", ")}`);
  }
}

const dave = new Gamer("Dave", 0);
dave.incrementScore();
dave.incrementScore();
dave.incrementScore();
dave.decrementScore();
console.log(dave);

const wizzard = new Character("Wizzard");
wizzard.addItem("wand");
wizzard.addItem("cloak");
wizzard.addItem("spellbook");
