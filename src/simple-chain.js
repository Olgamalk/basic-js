const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],

  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.array.length || typeof(position) !== 'number') {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    };
    let result = [];
    for (let i = 0; i < this.array.length; i++) {
     if (i !== (position - 1)) {
       result.push(this.array[i]);
     }
    }
    this.array = result;
    return this
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let finish = this.array.join('~~');
    this.array.length = 0;
    return finish;
  }
};

module.exports = {
  chainMaker
};
