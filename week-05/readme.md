# 雲端原生系統 Assignment 04

## 1. **https://www.urcafemate.me/planning-01/wireframe-homepage.png**

- **說明**：因為小組 GitHub 尚未實作 Express，所以我先用指向靜態文件練習。不過我可以再 clone 自己的 repo，實測 Express 專案是否能成功運行。

## 2. **你在哪裡購買網域的**：

- NameCheap（真的cheap！）

## 3. **DNS 的 A record 是什麼？**

- 「A」代表「位址」，是最基礎的 DNS 記錄類型，表示**該域名的 IP 位址**，
  直接告訴user這個網域對應的伺服器在哪裡。

## 4. **DNS 的 NS record 是什麼？**

- 「NS」代表的是「Name Server」，用來指定管理域名的名稱伺服器，
  告訴 DNS 系統哪個伺服器負責管理這個網域的 DNS 記錄，讓它知道該向哪裡查詢具體的 IP 地址。

## 5. **Domain Name vs FQDN vs URL 這三者分別為何？**

- **Domain Name**：網站的名稱，例如 `urcafemate.me`，讓user不需要記住複雜的 IP 地址，只需輸入好記的名稱就可以訪問網站。
- **FQDN（Fully Qualified Domain Name）**：完整網域名稱，例如 `www.urcafemate.me`。
- **URL**：完整的網頁地址，包括協議和路徑，例如 `https://www.urcafemate.me/planning-01/wireframe-homepage.png`。

```
在 https://www.urcafemate.me/planning-01/wireframe-homepage.png 這個 URL 中：
 URL：是整個 https://www.urcafemate.me/planning-01/wireframe-homepage.png。
 FQDN：在//跟/之間 www.urcafemate.me則是完整的全域名稱，包含了主機名稱（www）和網域（urcafemate.me）。
 Domain Name：是 urcafemate.me，代表網站的名稱，也就是我們買的網域。

```

## 6. **為什麼應該要為網站加上憑證？而不是直接用 http 就好？**

一般來說，現代瀏覽器會對使用 HTTP 的網站發出警告，提示user進入不安全的網站或出現網頁無法開啟的畫面，
正常上使用如果要在上面輸入密碼相關的資料就得多加謹慎。

而利用SSL憑證讓server跟client間建立加密安全協定，就可以保護用戶的隱私資料避免被洩漏，增加安全性，
防止資料被竊取，這樣一來，也較不會讓user使用網站上感到不安並導致流量流失，**增加網頁的信任感**。
