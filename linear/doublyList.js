/*
    Common operations on a doubly linked list may include:
    + Adding nodes to both ends of the list
    + Removing nodes from both ends of the list
    + Finding and removing a node from anywhere in the list
    + Traversing (or traveling through) the list
*/

const Node = require('./node.js');

class DoublyList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addToHead(data) {
        let currentHead = this.head;
        const newHead = new Node(data);

        if(!currentHead) {
            currentHead = newHead;
            this.head = currentHead;
            this.tail = currentHead;
            currentHead.setNextNode(null);
            currentHead.setPreviousNode(null);
            return;
        }

        currentHead.setPreviousNode(newHead);
        newHead.setNextNode(currentHead);
        newHead.setPreviousNode(null);
        this.head = newHead;
        return newHead;
    }
    addToTail(data) {
        let currentTail = this.tail;
        const newTail = new Node(data);

        if(!this.head) {
            currentTail = newTail;
            this.head = currentTail;
            this.tail = currentTail;
            currentTail.setNextNode(null);
            currentTail.setPreviousNode(null);
            return;
        }

        currentTail.setNextNode(newTail);
        newTail.setPreviousNode(currentTail);
        newTail.setNextNode(null);
        this.tail = newTail;
        return newTail;
    }
    removeHead() {
        const currentHead = this.head;
        const newHead = currentHead.getNextNode();

        newHead.setPreviousNode(null);
        this.head = newHead;
        return currentHead;
    }
    removeTail() {
        const currentTail = this.tail;
        const newTail = currentTail.getPreviousNode();

        newTail.setNextNode(null);
        this.tail = newTail;
        return currentTail;
    }
    removeMiddle() {
        let prev;
        let next;

        let fastPointer = this.head;
        let slowPointer = this.head;

        while(fastPointer !== null) {
            fastPointer = fastPointer.getNextNode();
            if(fastPointer !== null) {
                fastPointer = fastPointer.getNextNode();
                slowPointer = slowPointer.getNextNode();
            }
        }

        prev = slowPointer.getPreviousNode();
        next = slowPointer.getNextNode();
        prev.setNextNode(next);
        next.setPreviousNode(prev);
        return slowPointer;
    }
    printList() {
        let currentNode = this.head;
        let output = '<head> ';

        while(currentNode !== null) {
            output += `#${currentNode.data} `;
            currentNode = currentNode.getNextNode();
        }
        output += ' <tail>';
        console.log(output);
    }
}

const double = new DoublyList();
double.addToHead('Patric');
double.addToHead('Spongebob');
double.addToTail('Squidward');
double.addToTail('Mr. Krabs')
double.printList();

console.log(`\nRemove Head`)
double.removeHead();
double.printList();

console.log(`\nRemove Tail`)
double.removeTail();
double.printList();

console.log(`\nAdd to Head`)
double.addToHead('Spongebob');
double.printList();

console.log(`\nRemove the Middle`)
double.removeMiddle();
double.printList();

module.exports = DoublyList;