class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    AddAtHead(value) {
      var newNode = new Node(value);
  
      if (this.head === null) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
  
      return this.head;
    }
    removeFront(value) {
        if (this.head === null) {
            return null;
        }
        var currentHead = this.head;
        this.head = this.head.next;
    return this.head;
  }
    front(value){
        if (this.head === null){
            return null;}
        return this.head.value;
    }
    contains(value) {
      var checker = this.head;
  
      while (checker !== null) {
        if (checker.value === value) {
          return true;
        }
        checker = checker.next;
      }
  
      return false;
    }
    }

    SLL= new LinkedList();
    SLL.AddAtHead(5);
    SLL.AddAtHead(6);
    SLL.AddAtHead(100);
    console.log(SLL);
    SLL.removeFront();
    console.log(SLL);
    console.log(SLL.front());

    result = SLL.contains(10);
    console.log(result);

    SLL.AddAtHead(100);

    result = SLL.contains(100);
    console.log(result);

