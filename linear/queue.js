/*
    Queues provide three methods for interaction:
    + Enqueue - Adds data to the "back" or end of the queue
    + Dequeue - Provides and removes data from the "front" or beginning of the queue
    + Peek - Reveals data from the "front" of the queue without removing it

    Queues are a First In, First Out (FIFO) structure.

    One last constraint that may be placed on a queue is its length. If a queue has
    a limit on the amount of data that can be placed into it, it is considered a 
    bounded queue.

    Similar to stacks, attempting to enqueue data onto an already full queue will 
    result in a queue overflow. If you attempt to dequeue data from an empty queue, 
    it will result in a queue underflow.
*/
const DoublyList = require('./doublyList.js');

class Queue extends DoublyList {
    constructor(maxSize = Infinity) {
        super();
        this.size = 0;
        this.maxSize = maxSize;
    }

    enqueue(data) {
        if(this.isEmpty()) {
            this.addToHead(data);
            this.size++;
            console.log(`Added ${data} to the queue! Queue size is now ${this.size}.`);
        } else if(this.hasRoom()) {
            this.addToTail(data);
            this.size++;
            console.log(`Added ${data} to the queue! Queue size is now ${this.size}.`);
        } else {
            console.log(`Tried to add ${data} but queue is full!`);
        }
    }
    dequeue() {
        let currentHead = this.head;
        let next = currentHead.getNextNode();

        if(this.isEmpty()) {
            console.log('The list is empty');
        } else {
            next.setPreviousNode(null);
            this.removeHead();
            this.size--;
            console.log(`Removed ${currentHead.data} from the queue! Queue size is now ${this.size}.`)
            return this.head;
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
        console.log(`The maximum queue size is now set to: ${n}`);
    }
    clearMaxSize() {
        this.maxSize = 0;
    }
    peek() {
        console.log(`The front of the queue is: ${this.head.data}`)
    }
}

const checkout = new Queue();
checkout.enqueue(5);
checkout.enqueue(4);
checkout.enqueue(3);
checkout.enqueue(2);
checkout.enqueue(1);
checkout.setMaxSize(5);
checkout.enqueue(0);
checkout.dequeue();
checkout.peek();