// Stack implementation

class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
    console.log("pushed element " + element);
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.size() - 1];
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.stack.length;
  }
  printStack(){
    for(let i=0;i<this.size();i++){
        console.log(this.stack[i])
    }
  }
}

const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(12);
stack.printStack()
