# 雲端原生系統 Assignment [Express專案]

## package.json 中的 dependencies 與 devDependencies

```
npm init 會建立一個 npm 的初始環境，npm 會自動替你生成空白的 package.json 這個檔案，裡面就有關於專案的設置：包含dependencies & devDependencies。
```

- dependencies：部署後仍然需要依賴使用的 plug-in套件。
  ex.`npm install express`就用來構建 Web 應用和 API
- devDependencies：只有單純在當下開發或測試環境需要的套件，應用部署後不需要。
  ex.`npm install prettier --save-dev`用以自動調整代碼的格式。

**補充：**
`npm install packagename –save`： 寫入至dependencies 與 devDependencies 下
`npm install packagename –save-dev`：只有寫入devDependencies 下。
**所以執行 npm install 時，可以根據需求，使用不同的指令安裝**

## package.json 中的 scripts 區塊

我自己把script翻成**腳本的聚集**，而我們會在腳本裡的欄位編寫指令，然後使用npm指令pack整個專案，以便在開發過程中執行常見任務。

```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  在這個script中定義了一個名為 test 的腳本，告知使用者目前沒有定義測試。當你執行 npm run test 時，這段腳本會輸出錯誤消息並以狀態碼 1 結束，表示為編寫任何實際的測試或代碼。
```

## 怎麼在不改下述程式碼的情況下更改監聽的port：環境變數

1. `npm install dotenv` 安裝dotenv套件
2. `PORT=3000` # 這裡可以設置任何你想要的 port
   `在專案目錄創建一個 .env 的檔案，並在文件裡指定要使用的port
3. `const port = process.env.PORT ||４000;`修改程式碼使其使用環境變數 PORT，否則則使用預設值
4. `"scripts": {
  "start": "node -r dotenv/config app.js"
}
`因為我們使用dotenv，所以要在package.json 中的 scripts 區塊添加一行，這樣在啟動應用程式時才會自動加載 .env 文件

## 哪些檔案應該要被放上 github repo

當要將 Express 專案上傳到 GitHub 時，應該包括必要的檔案以便其他user能夠理解和使用該專案，並確保使用 .gitignore 來排除不需要的檔案和資料夾，保持你的repo整潔。

### 應放上 GitHub 的檔案和資料夾

1. package.json：定義了專案的設置（如名稱、版本、描述等），以及專案所需的依賴和腳本命令。
2. package-lock.json：當前安裝的依賴版本，以確保在不同環境中的一致性。
3. app.js 或其他.js程式檔案:主應用程式檔案。
4. README.md：專案的說明文件，應包含專案簡介、用法、程式檔案說明等。
5. .gitignore：定義哪些檔案和資料夾應該被 Git 忽略，通常包括 node_modules、.env 等不需要被版本控制的檔案。
6. 測試檔案：可以放上測試的檔案和資料夾，以提供user了解此專案的完備性及完整度。

### 不應放上 GitHub 的檔案和資料夾

1. node_modules:我認為不要將 node_modules 資料夾上傳到 GitHub，因為這些dependencies可以通過 package.json 安裝。
2. .env:存放環境變數的檔案，通常包含敏感資訊，應在.gitignore 中排除。
3. 其他臨時性檔案

## CJS vs ESM

`在 Node.js 中，CommonJS (CJS) 和 ECMAScript Modules (ESM) 是兩種主要的模組系統。以下是他們使用上的差異：`

### 1.模組導入與導出

- CJS

```
// 導入
const express = require('express');

// 導出
module.exports = myFunction;
```

-ESM

```
// 導入
import express from 'express';

// 導出
export default myFunction;
```

### 2.檔案名稱

- CJS：通常使用 `.js` 檔案擴展名。
- ESM：可以使用 `.mjs` 檔案擴展名，或者在 package.json 中設置 `"type": "module" `使所有 .js 檔案被視為 ESM。

### 3.同步與非同步

- CJS：`require` 是同步的，會在模組載入時阻塞其他代碼的執行。
- ESM：`import` 是非同步的，可以提高性能，因為它允許其他代碼在模組載入的同時執行。

### 4. 使用環境

- CJS：從 Node.js 開始就可使用，因此廣泛使用於許多舊版專案。
- ESM：Node.js 12 開始引入並在 Node.js 14 和更高版本中更加穩定。現代框架越來越多地支持使用ESM。

## localhost

## curl 是什麼？查查看怎麼用 curl 來測試網路連線？常用參數有哪些？

```

```

```

```
