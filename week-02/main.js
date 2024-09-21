//測試 Stack 
import Stack from 'week-02/stack.js';

let myStack = new Stack(5);

myStack.push(9);
myStack.push(0);
myStack.push(6);

myStack.print(); // 印出 9,0,6

myStack.pop(); // 移除頂端元素 6
myStack.print(); // 印出 9,0

myStack.push(4);
myStack.push(50);
myStack.print(); // 印出 9,0,50,4
myStack.push(99);

console.log(myStack.isStackFull()?'Stack is full.' : 'Stack is not full'); // true，堆疊是空的

myStack.clear(); // 清空堆疊
myStack.print(); // 印出空字串