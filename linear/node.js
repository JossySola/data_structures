/*
    Classes are a template for creating objects. They encapsulate data with code to work on
    that data. Classes in JS are built on prototypes but also have some syntax and semantics
    that are unique to clases.

    A class element can be characterized by three aspects:

    + Kind: Getter, Setter, Method or Field(Property)
    + Location: Static or Instance
    + Visibility: Public or Private

    The Constructor method is a special method for creating and initializing an object created
    with a class. There can only be one special method with the name "constructor" in a class.

    A constructor can use the "super" keyword to call the constructor of the super class. You
    can create instance properties inside the constructor. Alternatively, if your instance
    properties' values do not depend on the constructor's arguments, you can define them as
    "class fields".

    Evaluation order:
        1. The "extends" clause
        2. The "constructor" method
        3. The class elements' property keys are evaluated in order
        4. Methods and accessors are installed in order
        5. The class is now initialized with the prototype specified by "extends" and
        implementation specified by "constructor"
        
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }

    setNextNode(node) {
        if(node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw new Error('You have to set a Node instance.');
        }
    }
    getNextNode() {
        return this.next;
    }
    setPreviousNode(node) {
        if(node instanceof Node || node === null) {
            this.previous = node;
        } else {
            throw new Error('You have to set a Node instance.');
        }
    }
    getPreviousNode() {
        return this.previous;
    }
}

module.exports = Node;