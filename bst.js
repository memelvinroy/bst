
class Node {
    constructor(data = null) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class Tree {
    constructor(array = []) {
      this.root = this.buildTree(array);
    }
  
    buildTree(array) {
      if (!array.length) return null;
      const mid = Math.floor(array.length / 2);
      const root = new Node(array[mid]);
      root.left = this.buildTree(array.slice(0, mid));
      root.right = this.buildTree(array.slice(mid + 1));
      return root;
    }
  
    insert(value) {
      this.root = this.insertValue(this.root, value);
    }
  
    insertValue(node, value) {
      if (node === null) {
        return new Node(value);
      }
      if (value < node.data) {
        node.left = this.insertValue(node.left, value);
      } else if (value > node.data) { 
        node.right = this.insertValue(node.right, value);
      }
      return node;
    }
  
    delete(value) {
      this.root = this.deleteValue(this.root, value);
    }
  
    deleteValue(node, value) {
      if (node === null) return node;
      if (value < node.data) {
        node.left = this.deleteValue(node.left, value);
      } else if (value > node.data) {
        node.right = this.deleteValue(node.right, value);
      } else {
        if (node.left === null) return node.right;
        else if (node.right === null) return node.left;
        node.data = this.minValue(node.right);
        node.right = this.deleteValue(node.right, node.data);
      }
      return node;
    }
  
    minValue(node) {
      while (node.left !== null) {
        node = node.left;
      }
      return node.data;
    }
  
    find(value) {
      return this.findValue(this.root, value);
    }
  
    findValue(node, value) {
      if (node === null) return null;
      if (value === node.data) return node;
      if (value < node.data) {
        return this.findValue(node.left, value);
      } else {
        return this.findValue(node.right, value);
      }
    }
  
    inorder() {
      const result = [];
      const stack = [];
      let current = this.root;
      while (current !== null || stack.length !== 0) {
        while (current !== null) {
          stack.push(current);
          current = current.left;
        }
        current = stack.pop();
        result.push(current.data);
        current = current.right;
      }
      return result;
    }
  }
  