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
      let newNode = new Node(value);
  
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
        let currentHead = this.head;
        this.head = this.head.next;
    return this.head;
  }
    front(value){
        if (this.head === null){
            return null;}
        return this.head.value;
    }
    contains(value) {
      let checker = this.head;
  
      while (checker !== null) {
        if (checker.value === value) {
          return true;
        }
        checker = checker.next;
      }
  
      return false;
    }

    length() {
      let checker = this.head;
      let count = 0;
  
      while (checker !== null) {
        count++;
        checker = checker.next;
      }
  
      return count;
    }

    display() {
      let checker = this.head;
      let content= "";
      while (checker !== null) {
        content += checker.value.toString() + " ";
        checker=checker.next;
      }
      console.log(content);
    }
    max(){
      let checker=this.head;
      let max =checker.value;
      while (checker!== null){
        if (checker.value> max){
          max=checker.value;
        }
        checker=checker.next
      }
      return max;
    }
    min() {
      let checker=this.head;
      let min =checker.value;
      while (checker!== null){
        if (checker.value< min){
          min=checker.value;
        }
        checker=checker.next
      }
      return min;
    }
    average () {
      let checker=this.head;
      let sum=0;
      while (checker!== null){
      sum+= checker.value;
      checker=checker.next;
      }
    let average= sum/this.length();
    return average;
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
    SLL.AddAtHead(70);
    SLL.AddAtHead(200);
    SLL.AddAtHead(0);

    result = SLL.contains(100);
    console.log(result);

    L=SLL.length();
    console.log(L);

    SLL.display();
    console.log(SLL.max());
    console.log(SLL.min());
    console.log(SLL.average());

