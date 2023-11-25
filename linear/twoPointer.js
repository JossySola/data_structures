const SinglyList = require('./singlyList.js');

// The two-pointer iteration is also known as the "runner technique"
class TwoPointer extends SinglyList {
    constructor() { // constructor is like the useEffect hook in React, called in the initialization
        super(); // invokes the parent class constructor and binds the parent class' public fields
        // "Constructor" passes parameters to the parent's class constructor through "super"
    }

    nthLast(n) {
        let current = null;
        let tailPointer = this.head;
        let count = 0;

        if(typeof n === 'number') {
            while(tailPointer) {
                tailPointer = tailPointer.getNextNode();
                if(count >= n) {
                    if(!current) {
                        current = this.head;
                    }
                    current = current.getNextNode();
                }
                count++;
            }
            return current;
        } else {
            console.log("The parameter must be a number.");
            return;
        }
    }

    findMiddle() {
        let fastPointer = this.head;
        let slowPointer = this.head;

        while(fastPointer !== null) {
            fastPointer = fastPointer.getNextNode();
            if(fastPointer !== null) {
                fastPointer = fastPointer.getNextNode();
                slowPointer = slowPointer.getNextNode();
            }
        }
        return slowPointer;
    }
}

const week = new TwoPointer();
week.addToHead('Friday');
week.addToHead('Thursday');
week.addToHead('Wednesday');
week.addToHead('Tuesday');
week.addToHead('Monday');
week.addToTail('Saturday');
week.addToTail('Sunday');
week.printList();

console.log(week.nthLast(2))
console.log(week.findMiddle())