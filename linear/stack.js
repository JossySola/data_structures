/*
    A stack is a linear collection of nodes that adds data to one
    end of the data structure. However, unline a queue, a stack
    removes data from the same end of the data structure.

    Stacks are often thought of as a "First In, Last Out" (FILO)
    data structure.

    Stacks provide three methods for interaction:
    + Push: Adds data to the "top" of the stack
    + Pop: Returns and removes data from the "top" of the stack
    + Peek: Returns data from the "top" of the stack without removing it

    Stacks mimic a physical "stack" of objects.
*/
const DoublyList = require('./doublyList.js');

class Stack extends DoublyList {
    constructor(maxSize = Infinity) {
        super();
        this.size = 0;
        this.maxSize = maxSize;
    }

    peek() {
        if(!this.isEmpty()) {
            return this.head.data;
        } else {
            return null;
        }
    }
    push(data) {
        if(this.hasRoom()) {
            this.addToHead(data);
            this.size++;
            console.log(`${data} has been added to the Stack. The count is: ${this.size}`);
        } else {
            console.log('Stack is full.');
        }
    }
    pop() {
        if(!this.isEmpty()) {
            const value = this.removeHead();
            this.size--;
            console.log(`${value.data} has been removed from the Stack. The count is: ${this.size}`);
            return value;
        } else {
            console.log('The Stack is empty.');
        }
        
    }
    hasRoom() {
        if(this.size < this.maxSize) {
            return true;
        } else {
            return false;
        }
    }
    isEmpty() {
        if(this.size === 0) {
            return true;
        } else {
            return false;
        }
    }
    setMaxSize(n) {
        this.maxSize = n;
    }
}

const abc = new Stack();
abc.push('a');
abc.push('b');
abc.push('c');
abc.setMaxSize(3);
abc.push('d');
abc.printList();
abc.pop();
abc.printList();