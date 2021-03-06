import Component from '@ember/component';

export default Component.extend({
  winner: null,
  winsPlayer1: 0,
  winsPlayer2: 0,
  name: null,
  init() {
    this._super(...arguments);

    this.startGame();
    if (this.get('model.modelName') === 'people') {
      this.set('name', 'people')
      this.findWinnerProp('mass');
    } else {
      this.set('name', 'starship')
      this.findWinnerProp('crew');
    }
  },

  startGame() {
    const model = this.get('model');
    this.set('player1', this.selectRandom(model));
    this.set('player2', this.selectRandom(model, this.player1.get('id')));
  },

  selectRandom(items, excludeId = null) {
    const availableItems = excludeId === null
      ? items
      : items.filter(item => item.get('id') !== excludeId);

    const number = Math.random() * availableItems.get('length');
    const randomIndex = Math.floor(number);

    return availableItems.objectAt(randomIndex);
  },

  findWinnerProp(prop) {
    const prop1 = parseInt(this.get(`player1.${prop}`));
    const prop2 = parseInt(this.get(`player2.${prop}`));
    this.findWinner(prop1, prop2)
  },

  findWinner(player1Mass, player2Mass) {
    if (player1Mass > player2Mass) {
      this.set('winner', 'Player 1');
      this.incrementProperty('winsPlayer1', 1);
    } else if (player2Mass > player1Mass) {
      this.set('winner', 'Player 2');
      this.incrementProperty('winsPlayer2', 1);
    } else {
      this.set('winner', 'No Player won');
    }
  },

  actions: {
    playAgain() {
      this.init();
    }
  }
});
