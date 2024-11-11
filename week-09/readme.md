# 雲端原生系統 Assignment 06

# 驗屍報告：Nginx 啟動與配置故障排查

---

## 1. 偽造的 Web 伺服器

- **問題**：在測試時出現 `fake web server` 的回應訊息，可能有另一個偽造的伺服器攔截了連線，但尚未確定原因。
- **解決方法**：檢查網路配置，確保 Nginx 是唯一在該 port 上監聽的服務器，並再次測試連線。
  ![錯誤顯示](https://github.com/rachelwu-wu/git-practice/blob/13d45c07c2e787e13e1eabe7df9dd789f01344bb/fake%20web%20server.png)

---

## 2. 檢查 Nginx 狀態

- **問題**：執行 `sudo systemctl status nginx` 後，發現 Nginx 狀態為「inactive (dead)」，伺服器尚未真正啟動。執行 `sudo systemctl start nginx` 後仍無法連線，需進一步判斷是配置錯誤、port相關錯誤還是權限問題。
- **解決方法**：從配置文件著手，檢查 `nginx.conf` 是否存在格式或設定上的問題。
  ![Nginx狀態](https://github.com/rachelwu-wu/git-practice/blob/13d45c07c2e787e13e1eabe7df9dd789f01344bb/systemctl%20status%20nginx.png)
  ![Nginx start](https://github.com/rachelwu-wu/git-practice/blob/13d45c07c2e787e13e1eabe7df9dd789f01344bb/systemctl%20start%20nginx%20.png)

---

## 3. Nginx 配置文件錯誤

- **問題**：在 `sudo nano /etc/nginx/nginx.conf` 中發現配置文件中分號的重複使用，造成語法錯誤。
- **解決方法**：調整並修正配置文件中的錯誤格式，保存並重啟 Nginx。修正後仍無法連線，故繼續排查其他可能性。
  ![Nginx conf](https://github.com/rachelwu-wu/git-practice/blob/13d45c07c2e787e13e1eabe7df9dd789f01344bb/sudo%20nano%20%3Aetc%3Anginx%3Anginx.conf.png)

---

## 4. 80 埠被佔用

- **問題**：檢查 Nginx 狀態時，發現 80 埠已被其他進程佔用，導致 Nginx 無法啟動。（錯誤訊息：`nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)`）
- **解決方法**：找到佔用80 port 的活動 ID，並下指令殺掉該活動，重新啟動仍錯，這時候大概已經槁木死灰（開玩笑），幸好聊天室有人提到防火牆配置問題，於是…
  ![Nginx status](<https://github.com/rachelwu-wu/git-practice/blob/13d45c07c2e787e13e1eabe7df9dd789f01344bb/80%20failed%20(already%20in%20use).png>)
  ![kill PID](https://github.com/rachelwu-wu/git-practice/blob/13d45c07c2e787e13e1eabe7df9dd789f01344bb/%E6%8A%8A%E5%9C%A8%E7%9B%A3%E8%81%BD%E7%9A%84%E9%80%B2%E7%A8%8Bkill%E6%8E%89.png)

---

## 5. 防火牆規則（iptables）阻擋

- **問題**：檢查 iptables 規則後，發現防火牆阻擋了 TCP 80 埠的流量。
- **解決方法**：使用 `sudo iptables -D INPUT -p tcp --dport 80 -j REJECT` 刪除阻擋規則，確認規則移除後，重新啟動 Nginx，但仍然無法正常運作。
  ![檢查防火牆]（https://github.com/rachelwu-wu/git-practice/blob/13d45c07c2e787e13e1eabe7df9dd789f01344bb/%E6%AA%A2%E6%9F%A5iptables%E9%85%8D%E7%BD%AE.png）
  ![防火牆規則阻擋處理](https://github.com/rachelwu-wu/git-practice/blob/13d45c07c2e787e13e1eabe7df9dd789f01344bb/%E5%88%AA%E9%99%A4%E6%8B%92%E7%B5%95%E7%9A%84rule%E5%86%8D%E9%87%8D%E6%96%B0%E5%95%9F%E5%8B%95.png)

---

## 6. Error_log 日誌分析

- **問題**：在 Nginx 的 `default` 配置中找到錯誤日誌的位置，檢查 `/var/log/myweb/error.log` 發現「Permission denied」的錯誤，顯示 Nginx 無法訪問 `/var/myweb/index.html`。
- **解決方法**：通過執行 `sudo chmod 777 "/var/myweb/index.html"` 修改該文件的權限，確保 Nginx 有權限訪問該文件。
  ![查看預設配置文件位置](https://github.com/rachelwu-wu/git-practice/blob/13d45c07c2e787e13e1eabe7df9dd789f01344bb/%E6%9F%A5%E7%9C%8B%20nginx%20%E4%B8%AD%E7%9A%84%E9%A0%90%E8%A8%AD%E7%B6%B2%E7%AB%99%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%85%A7%E5%AE%B9.png)
  ![尋找error log](https://github.com/rachelwu-wu/git-practice/blob/13d45c07c2e787e13e1eabe7df9dd789f01344bb/%E6%89%BE%E5%88%B0%E9%8C%AF%E8%AA%A4%E6%97%A5%E8%AA%8C%E6%96%87%E4%BB%B6.png)
  ![查看 error log](https://github.com/rachelwu-wu/git-practice/blob/13d45c07c2e787e13e1eabe7df9dd789f01344bb/nginx%20%E7%94%A8%E6%88%B6%E6%B2%92%E6%9C%89%E8%B6%B3%E5%A4%A0%E7%9A%84%E6%AC%8A%E9%99%90%E8%A8%AA%E5%95%8F%E8%A9%B2%E6%96%87%E4%BB%B6.png)
  ![解決權限問題](https://github.com/rachelwu-wu/git-practice/blob/13d45c07c2e787e13e1eabe7df9dd789f01344bb/%20chmod%2077.png)

---

### 總結

此次故障的原因涉及偽造伺服器、Nginx 配置錯誤、埠被占用、防火牆阻擋和文件權限等問題。依次解決這些問題後，應能確保 Nginx 正常啟動並提供服務。
