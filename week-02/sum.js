/*以下為使用reduce()實作sum 函數
限制：不可以出現 for, while 等迴圈程式
概念:會從左到右逐一縮減，最終計算為一個值
*/

/*arr.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)
1. accumulator：保存每次運算後的結果
2. currentValue：原陣列目前所處理中元素的值
（若有提供 initialValue，則 accumulator 將會等於 initialValue，且 currentValue 會等於陣列中的第一個元素值）
（若沒有提供 initialValue，則 accumulator 會等於陣列的第一個元素值，且 currentValue 將會等於陣列的第二個元素值。）
3. currentIndex(optional)：原陣列目前所處理中元素的索引，若有initialValue，索引從0開始
4. array(optional)：呼叫陣列
5. initialValue(optional)：第一次呼叫callback時傳入的累加初始值，若空陣列情況下呼叫reduce()下會錯誤
（如果不提供初始值initialValue，則陣列第一個元素，數字1會變成初始值）
*/

//ary; number array
function sum(ary){
    const initialValue=0;
    return ary.reduce((accumulator,currentValue)=> accumulator + currentValue, initialValue);
}

console.log(sum([1,5,3,2]));//11