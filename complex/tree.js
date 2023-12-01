class TreeNode {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
  
    addChild(child) {
      if (child instanceof TreeNode) {
        this.children.push(child);
      } else {
        this.children.push(new TreeNode(child));
      }
    }
    
    removeChild(childToRemove) {
      const length = this.children.length;
      this.children = this.children.filter(child => {
        return childToRemove instanceof TreeNode
        ? child !== childToRemove
        : child.data !== childToRemove;
      });
  
      if (length === this.children.length) {
        this.children.forEach(child => child.removeChild(childToRemove));
      }
    }
  
    print(level = 0) {
      let result = '';
      for (let i = 0; i < level; i++) {
        result += '-- ';
      }
      console.log(`${result}${this.data}`);
      this.children.forEach(child => child.print(level + 1));
    }
    
    depthFirstTraversal() {
        // Traverses all layers for each TreeNode consecutively
      console.log(this.data);
      this.children.forEach(child => child.depthFirstTraversal());
    }
    
    breadthFirstTraversal() {
        // Traverses all TreeNodes for each layer consecutively
      let queue = [this]; // Current TreeNode
      while(queue.length > 0) {
        const current = queue.shift(); // Extracts first element inside an array
        console.log(current.data);
        queue = queue.concat(current.children);
      }
    }
  };

// ******************************************************
const tree = new TreeNode(15);
const randomize = () => Math.floor(Math.random() * 20);

// add first-level children
for (let i = 0; i < 3; i++) {
  tree.addChild(randomize());
}

// add second-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    tree.children[i].addChild(randomize());
  }
}

tree.print();
tree.breadthFirstTraversal();
// ******************************************************
const menu = new TreeNode('Menu');

const entries = {
  'Breakfast' : [ 'Cereal', 'BBQ Chicken', 'Oatmeal' ],
  'Lunch' : [ 'Soup', 'Sandwich', 'Lasagna' ],
  'Dinner' : [ 'Yogurt', 'Filet Mignon', 'Fish Florentine' ]
};

const meals = Object.keys(entries);
for (let meal=0; meal < meals.length; meal++){
  menu.addChild(meals[meal]);
  const entrylist = entries[meals[meal]];
  entrylist.forEach( entry => {
    menu.children[meal].addChild(entry);
  });
}

menu.print();
menu.removeChild('BBQ Chicken');
menu.children[2].addChild('BBQ Chicken');
menu.removeChild('Yogurt');
menu.children[0].addChild('Yogurt');
console.log('Corrected Menu')
menu.print();
menu.depthFirstTraversal()
// ******************************************************