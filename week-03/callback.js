//定義一個 doJob 函式，用來模擬一個非同步操作
function doJob(job, time, cb) {
  setTimeout(() => {
    // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
    let now = new Date();
    cb(`完成工作 ${job} at ${now.toISOString()}`);
  }, time);
}

// 刷牙 1sec -> 化妝 5sec -> 搭上公車933 10sec -> 買咖啡 3sec
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);

// 開始執行各項工作，並依序嵌套回呼
doJob("刷牙", 1000, function (data) {
  console.log(data); // 刷牙完成後輸出

  doJob("化妝", 5000, function (data) {
    console.log(data); // 化妝完成後輸出

    doJob("搭上公車933", 10000, function (data) {
      console.log(data); // 搭上公車933完成後輸出

      doJob("買咖啡", 3000, function (data) {
        console.log(data); // 買咖啡完成後輸出
      });
    });
  });
});
