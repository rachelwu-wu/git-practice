//建構一個 Stack 類別
export default class Stack{
    // TODO: # 有特別的意思嗎？請以註解回覆
    /*# 是私有屬性(private)的標誌，屬性名稱前面加上 # 就會變成私有的
    ，無法在子類別或類別(class)外部直接存取（access)，只能在此類別中被access。*/
    #elements;


    constructor(maxSize){
        this.#elements =[];   // 使用陣列儲存stack的元素
        this.maxSize = maxSize;     // 最大堆疊容量 

    }


//檢查stack是否為空
isStackEmpty(){
    return this.#elements.length === 0;
}

//檢查stack是否已滿
isStackFull(){
    return this.#elements.length === this.maxSize;
}

//push()：將元素放入stack
push(element) {
    if(this.isStackFull()){
        console.log("Error: Stack is full!");  // 堆疊已滿時插入僅顯示錯誤訊息，而不拋出錯誤（原本使用throw new error)
        return;//  stack 是 full 的情況下會直接返回，不繼續執行後面的 push
    }
    this.#elements.push(element);
}

//pop()：從stack頂端取出資料並移除
pop(){
    if(this.isStackEmpty()){
        console.log("Error: Stack is empty!"); //當堆疊空時顯示取出資料錯誤
    }
    return this.#elements.pop();
}

//peek()：查看stack頂端資料，但不移除
peek(){
    if(this.isStackEmpty()){
       return null; //當堆疊空時，返回null
    }
    this.#elements[this.#elements.length-1]; //返回頂端資料
}

//size()：返回當前stack大小
size(){
    return this.#elements.length;    //使用陣列提供的 length 表示陣列長度
}

// 清空 stack
clear(){
    this.#elements = [];    //       直接清除陣列
}

//印出stack 內容
print(){
    console.log(this.#elements.join(', ')); //將陣列＋逗號印出來
}

}

