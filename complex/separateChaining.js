/*
    "Separate Chaining" strategy avoids collisions by updating the underlying data structure.
    Instead of an array of values that are mapped to by hashes, it could be an array of
    linked lists!
        1. Input Key
        2. Returns Index
        3. If Index in Array is empty
            i. A new Linked List is created with the value as <head>
        4. If Index in Array is occupied
            i. Append value to the Linked List given
*/

const SinglyList = require('../linear/singlyList');
const Node = require('./Node');
class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size)
      .fill(null)
      .map(() => new SinglyList());
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashmap.length;
  }

  assign(key, value) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex];
    if (linkedList.head === null) {
      linkedList.addToHead({ key, value });
      return;
    }
    let current = linkedList.head;
    while (current) {
      if (current.data.key === key) {
        current.data = { key, value };
      }
      if (!current.next) {
        current.next = new Node({ key, value });
        break;
      }
      current = current.next;
    }
  }

  retrieve(key) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex];
    let current = linkedList.head;

    while(current) {
      if(key === current.data.key) {
        return current.data.value;
      }
      current = current.getNextNode();
    }
    
    return null;
  }

  remove(key) {
    
  }
}

const birdCensus = new HashMap(16);

birdCensus.assign('mandarin duck', 'Central Park Pond');
birdCensus.assign('monk parakeet', 'Brooklyn College');
birdCensus.assign('horned owl', 'Pelham Bay Park');

console.log(birdCensus.retrieve('mandarin duck'));
console.log(birdCensus.retrieve('monk parakeet'));
console.log(birdCensus.retrieve('horned owl'));

module.exports = HashMap;