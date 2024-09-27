//測試 Stack 
import Stack from './stack.js';

let myStack = new Stack(5);

myStack.push(9);    //將9放入堆疊
myStack.push(0);    //將0放入堆疊
myStack.push(6);    //將6放入堆疊

myStack.print();    //印出 9,0,6

myStack.pop();  //移除並回傳頂端元素 6
myStack.print();    //印出 9,0

myStack.push(4);    //將4放入堆疊
myStack.push(50);   //將50 放入堆疊
myStack.print();    //印出 9,0,4,50
myStack.push(99);   //將99放入堆疊

/*除了基本的push、pop之外，也須驗證堆疊為滿或為空時，
是否會在行為後顯示錯誤。例如堆疊已滿時無法再插入新的元素*/
myStack.push(10);   //嘗試在堆疊已滿時，插入元素，應顯示堆疊已滿
console.log(myStack.size());    // 應該顯示 5，證明沒有插入第6個元素

myStack.clear();    // 清空堆疊
myStack.print();    // 印出空字串
myStack.pop();    //在堆疊為空時，取出元素，應顯示堆疊為空

//console.log(myStack.isStackEmpty()?'Stack is empty.' : 'Stack is not empty'); // true，顯示堆疊是空的