const Node = require('./node.js');
/*
    The list is comprised of a series of nodes. The head node is the node
    at the beginning of the list. Each node contains data and a link (or
    pointer) to the next node in the list. The list is terminated when a 
    node's link is null. This is called the tail node.

    Since the nodes use links to denote the next node in the sequence, the
    nodes are not required to be sequentially located in memory. These links
    also allow for quick insertion and removal of nodes.

    Common operations on a linked list may include:
    + Adding nodes
    + Removing nodes
    + Finding a node
    + Traversing (or traveling through) the linked list

    Linked lists typically contain UNIDIRECTIONAL links (next node), but
    some implementations make use of BIDIRECTIONAL links (next and previous
    nodes)
*/
class SinglyList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if(currentHead) {
            this.head.setNextNode(currentHead);
        }
        return newHead;
    }
    addToTail(data) {
        let tail = this.head;
        if(!tail) {
            this.head = new Node(data);
            return this.head;
        } else {
            while(tail.getNextNode()) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(new Node(data));
            return tail.getNextNode();
        }
    }
    removeHead() {
        const removedHead = this.head;
        const newHead = removedHead.getNextNode();
        if(!this.head) {
            return;
        }
        this.head = newHead;
        return removedHead.data;
    }
    printList() {
        let currentNode = this.head;
        let output = '<head> ';

        while(currentNode !== null) {
            output += `${currentNode.data} `;
            currentNode = currentNode.getNextNode();
        }
        output += ' <tail>';
        console.log(output);
    }
    swapNodes(data1,data2) {
        console.log(`\n${data1} <---> ${data2}`);

        if(data1 === data2) {
            console.log('Elements are the same - no swap to be made');
            return;
        }

        let node1 = this.head;
        let node1Prev = null;
        while(data1 !== node1.data) {
            if(!node1.getNextNode()) {
                break;
            }
            node1Prev = node1;
            node1 = node1.getNextNode();
        }

        let node2 = this.head;
        let node2Prev = null;
        while(data2 !== node2.data) {
            if(!node2.getNextNode()) {
                break;
            }
            node2Prev = node2;
            node2 = node2.getNextNode();
        }

        if(node1Prev === null) {
            this.head = node2;
        } else {
            node1Prev.setNextNode(node2);
        }
        if(node2Prev === null) {
            this.head = node1;
        } else {
            node2Prev.setNextNode(node1);
        }

        let temp = node1.getNextNode();
        node1.setNextNode(node2.getNextNode());
        node2.setNextNode(temp);
    }
}

const seasons = new SinglyList();

seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.printList();

seasons.removeHead();
seasons.printList();

seasons.swapNodes('fall','winter');
seasons.printList();

module.exports = SinglyList;