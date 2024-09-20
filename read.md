# 雲端原生系統 Assignment 02

## 安裝的 nodejs 版本
`node -v`
`v20.17.0`

## 因為選擇安裝 NodeJS 所以我想要分享自己為什麼仍選擇使用 NodeJS


**Node.js、JavaScript 和 npm 之間的關係於我如下：**
- JavaScript就像廚師使用「烹飪技術」來做菜，開發者使用 JavaScript 來寫代碼。
- Node.js 就像是開發者的「廚房」，提供了一個環境讓你可以用 JavaScript 來烹飪。
- npm 是「食材的超市」，提供各種函式庫和模組工具來加速和簡化烹飪過程。


1. 在坊間穩定性高
>其實是因為另一堂課老師也是建議安裝Node.js，但我認為若有更經驗的人告訴你安裝什麼平台環境，代表其在坊間成熟度足夠，且JavaScript如老師課堂提及原先只能在瀏覽器上被執行，但是當在電腦上安裝了 Node.js之後，就可以執行副檔名為 .js 的 JavaScript 的檔案，十分方便。
>
>其中也有提供瀏覽器API實作的setTimeout、console等，利用event-driven（事件驅動）的特性使得開發者能輕鬆處理不會阻塞主程式運行的非同步操作，讓網站操作上可以瀏覽其他不同頁面，不需坐等伺服器回應，提升使用者操作流暢度。
>
2. 較輕易獲得所需套件或資源
>node.js擁有強大的npm，其好處在於可以統一管理函式，也
可以使用別人寫好的函式庫，就不需上網下載很多單獨的指定套件，對於開發者而言，甚至可以透過package.json，羅列出專案需要哪些套件，之後安裝時只需要 npm install，npm 便會自動依照 package.json 的內容下載套件，提升建置環境的效率。
>
3. 相對較好上手
>從各個參考文件可以發現Node.js 的安裝過程相對簡單，在網路上也因其市場成熟度足夠，有許多教學及範例可以供參，可以很快在API、網頁應用等派上用場，學習曲線相較於其他較新穎的環境平台漸進且快速。
>

## nvm 與 npm 分別是什麼？
>以Node.js 當一個實作JavaScript的平台環境時，其系統包括 npm （Node.js 包管理器）和 nvm （Node.js 版本管理器）等重要工具。
>

### npm((Node Package Manager))
- **目的**：讓開發者可以藉由`npm install` 輕鬆安裝並管理函式庫，簡化了管理的時間。
- 只要提供package.json，開發者就可以下載後執行`npm install`安裝所需的套件了！
```
package.json：執行 `npm init`後產生的檔案，就像是一個控制面板，裡面大致記錄著以下：專案名稱(name)、專案所使用的套件種類＆簡介（dependencies&description)、套件概述（keywords)、版本(version)、腳本(script)、license（套件使用證照）
```

### nvm(Node Version Manager)
- **目的**：隨著時間推進，Node.js的版本也會變舊，想要切換到不同版本的Node.js，就需要經過 nvm 切換版本。

``` 
#列出已經安裝的所有版本
nvm ls

#安裝特定版本
nvm install v20.17.0

#切換成特定版本
nvm install v20.17.0

#設定預先版本
nvm alias default v20.17.0
```