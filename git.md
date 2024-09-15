# Basic Of Git

## **What are  blob, tree, commit, branch, head respectively?**
1. **Blob**: 
```
每當git add檔案的時候，就會產生一個blob object。這個物件會 *紀錄檔案的內容*，但不會紀錄檔名。
```
2. **Tree**: 
```
因為blob object不會紀錄檔名，藉由tree object可以儲存資料的結構以及檔名，大概就像是Git的目錄，會根據	<font color=#FF0000>git add</font>加在index的內容建立。 
```
3. **Commit**:
```
commit 代表一次完整的提交，感覺上像是截圖目前狀態，`git commit` 是把你在staging area的檔案提交到repository，使得檔案能夠永久保存，完成一個*存檔*的動作，也可以說是建立了一 *版本*。
```
4. **Branch**:
```
branch是開發中的某個分支，在使用`git init`預設的分支名稱原為main，為了維持master的穩定版本狀態，可以使用branch開發不同功能並且互不影響。
```
5. **Head**:
```
head會在Git中指出目前所在的branch，形同 **游標** 並間接指向當前 branch 的最新 commit。    
```

## **What happened in the `.git` folder during the operations in a Git repository?**
在 git repo 建立過程中，以下是我觀察到的常見操作：
1. **初始化**`git init`
```
建立.git資料夾，放入預先建立好的東西。
```
2. **新增檔案至暫存區**`git add`
```
repo下所有的檔案、目錄與子目錄下的所有檔案，全部都會被加入到這個 Git repo的索引中，此時並沒未建立任何版本，只是告知 Git 這些檔案「即將」被加到版本管理中。
```
3. **提交變更**`git commit`
```
加上commit Message（提交說明）錄提交版本更動的摘要，建立一個最新的版本變更，head也會被更新，指向最新的commit。
```
4. **推送到遠端**`git push`
```
將本地的提交推送到遠端（ex.GitHub）
```
5. **檢查狀態**`git status`
```
檢視現在工作目錄的狀態
```
**How to write better git commit messages?**
>一個好的 Git Commit Message 必須兼具 What & Why & How，能幫助開發者瞭解這個提交版本：
>
>>1. 做了什麼事情（What）
>>2. 為什麼要做這件事情（Why）
>>3. 用什麼方法做到的（How）
>
目前覺得不錯的style應該要可以分成多行，不要一行太多字元，內容簡言說明版本變更的項目與原因，形成和先前版本的對比，盡量維持user-friendly！
>
