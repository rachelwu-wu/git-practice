# 雲端原生系統 Assignment 04

## My instance’s public IP：54.80.237.26

## 什麼是 instance type?

instance type 是以 VM 形式呈現，不同的 instance type 提供不同的 CPU、記憶體、儲存和網絡資源組合，以滿足不同應用程式的需求。

## 什麼是 Nginx？有哪些用途與特性？

Nginx 是一個高效的 HTTP 和反向代理伺服器，廣泛用於負載平衡和網頁server，
它的主要用途和特性包括：

- **減少回應時間**：使用 reverse proxy 將 client 請求轉發到後端 server，並將 response 返回給客戶端，這有助於分散負載量。
- **負載平衡**：讓多台伺服器一起分擔工作，以免一台伺服器累壞或無法應付大量請求，足以使高流量網站應對突發流量。
- **提供更佳體驗**：以提高整體速度為宗旨，將流量 routing 到個別 server 上。

## pm2 套件是什麼？有什麼用處？

PM2 是一個 Node.js 應用程式管理工具，用於進行應用程式的監控和管理，簡單來說，就是用於簡化 Node.js的使用。

- **進程管理**：自動重啟崩潰的應用程式，確保服務持續運行。
- **日誌管理**：集中管理應用程式日誌，方便 debug。
- **負載平衡**：應用程式能夠在多核 CPU 上運行，提高性能。

## 步驟 9 中提到的 proxy 是什麼意思？為什麼要透過 Nginx 來 proxy 到 Express 開發的 Web Server?

proxy 指的是代理伺服器，充當客戶端和後端伺服器之間的中間商。
透過 Nginx 來 proxy 到 Express 開發的 Web Server 實現安全性和負載平衡：

- **安全性**：隱藏後端伺服器的具體地址，應用 Reverse Proxy 的特性讓客戶端無法直接訪問後端伺服器，降低攻擊的機率。
- **負載平衡**：將請求分配到多個後端伺服器上，提高可用性並減少負擔。

## 在 README 中提供步驟 9 的 Nginx 設定檔

```
server {
    listen 80;
    server_name YOUR_PUBLIC_IP;  # 替换为你的 EC2 公共 IP

    location / {
        proxy_pass http://localhost:3000;  # 替换为你的 Express 服务器运行的端口
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Security Group 是什麼？用途為何？有什麼設定原則嗎？

Security Group 是 AWS 中的一種虛擬防火牆，用於控制進出 EC2 instances 的流量。其主要用途包括：

- **流量控制**：設定允許或拒絕特定 IP 地址的訪問。
- **安全性增強**：通過限制不必要的流量，提高系統安全性。
- **設定原則**：
  - 僅開放必要的 port（如 HTTP 的 80 和 HTTPS 的 443）。
  - 使用最小權限原則，僅允許特定 IP 地址訪問敏感資源。

## 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？

`sudo` 是一個 Linux 命令，用於以 root 身份執行命令。某些操作（如安裝軟體或修改系統配置）需要更高權限，
因此需要使用 `sudo`。但如查看文件或執行不需要特權的命令，就不需要加上 `sudo`。終端也會提醒你該指令是屬於特權命令還是普通操作。

## Nginx 的 Log :

Nginx 有分成錯誤日誌及訪問日誌：

- **訪問日誌（access_log）**： 會放在/var/log/nginx/access.log，可以透過 sudo cat 查看 client request 。
- **錯誤日誌（error_log）**：默認放在/var/log/nginx/error.log，一樣可以透過 sudo cat 查看在Nginx上的操作。

## 其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論

- 問題：透過 pm2 啟動上週作業中的 Express server - app.js 一直出現 502 error
- 解決：再跑一次 `npm install` 跟 `express update`
- 思考：突然覺得 `npm install` 真的很常被拿來解決問題，但某種程度上可能修復了與 dependencies 相關的版本不兼容、損壞的依賴或 bug，
  不過不知道如果真的沒有明顯的bug時就更新套件是否是正確的觀念。

## 列出完成本作業時參考的資料

[**What is Nginx: Everything You Need to Know - Papertrail**](https://www.papertrail.com/solution/guides/nginx/)

[**[基礎觀念系列] Web Server & Nginx — (2) | by 莫力全Kyle Mo**](https://medium.com/starbugs/web-server-nginx-2-bc41c6268646)
