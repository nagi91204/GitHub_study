# 導入授業
---
### **GitとGitHubの違いとは、、、**
#### Git：ファイルのバージョン管理の仕組み
#### GitHub：web ブラウザで管理ができる
---
### **使用方法**
#### Git : コマンドベース（ターミナル）
#### GitHub : web ブラウザ（Safari, Chrome）
---
### **説明**
### CUI : Character User Interface
**・文字でファイル操作することを**
### GUI : Graphics User Interface
**・画面上の「絵」や「ボタン」を使ってコンピューターを操作できる仕組み**
### OS : Operation System
**コンピューターやスマホを動かす基本のしくみ。**
#### Linux ( CUI ) 
**サーバー管理、ネットワークをLinuxのコマンドをターミナルに入力してMacを操作する**

---
## *コマンド
### PCにインストールされたGitのバージョンを調べる
```zsh
Git --version
```

**Git : Linuxのコマンド**
**--version : オプション（追加情報）**
---
### *ターミナル画面をクリア*
```zsh
clear
```
---

## *GitにGitHubのアカウントを紐付ける*
---
### *ユーザー名の登録*

#### *git config --global user.name "ユーザー名" *
###*ユーザー名の登録確認*
```zsh
git config --global user.name
```

---
### *メールアドレスの登録*
```zsh
git config --global user.email "メールアドレス"
```

---
### *メールアドレスの登録確認*
```zsh
git config --global user.email
```

---

### ①ターミナル（LinuxコマンドでPC操作）
### ②WebブラウザGitHubページ
### ③PC内のファイル/フォルダ


## Linuxコマンド

### *pwd* : 
**現在のディレクトリを表示する *( print working directly )**

### ls : **現在のディレクトリにある、ファイルとフォルダをリストアップ
( 共有 : Share )
( ユーザー : User )**

### cd フォルダ名 : 現在のディレクトリを変更
**( change directly )**

### od../ : 一つ上のディレクトリに移動
**フォルダー名**

### mkdir GitHub ( mike directory )
**現在のディレクトリに新しくディレクト（ファイル）を作る**


## Gitコマンド

```zsh
git init
```
### 隠しフォルダを表示

```zsh
Finder = command + Shift + . ( dot )
```

### ファイルを作る
```zsh
touch <ファイル名>
```
##### **touch  ファイル名**

### ファイルをGitの管理下に入れる
```zsh
git add <ファイル名>
```

### 管理の状態を確認
```zsh
git status
```



# 2025/10/29
### MacOS限定
**.DS_Store（隠しファイル）**
**macOSが、フォルダ、ファイルの状態を間理する情報を入れたファイル（フォルダ・ファイルの状況が変わるたびに更新）
-> gitのバージョン管理に入れたはいけない
①セキュリティ的な観点：自分の意図しないPC環境がネット上にアップロードされる可能性
②gitの管理上とは無関係にファイルが更新されてしまうから、gitで管理しきれない個人の環境依存が発生する
.DS_Storeがバージョン内にあったとしても、完全に無視する設定を行う**
#### 手順
##### **.gitignoreというファイルを作る**(名前固定)
```zsh
touch .gitignore
```


### addしたファイルの管理を確定させる（ローカル）
```zsh
git commit -m "メッセージ"
```
**リポジトリ管理
メッセージ必要**

### ブランチ（バージョン管理）を"main"に設定
```zsh
git branch -M < ブランチ名 >
```
**（昔はmasterという名前だった)*


### ローカルの作業環境とネット上の自分のアカウントのレポジトリを関連付ける（ローカル）
```zsh
git remote add origin < URL >

"例"
git remote add origin https://github.com/nagi91204/GitHub_study.git
```

### ネット上にアップロード（commitした情報）
```zsh
git push -u origin < ブランチ名 >
```

### macOS限定
**push時にユーザー名とパスワードのにゅうryほくを求められる場合
ー＞アクセストークンキーを使う**

### 発行のしかた
**Githubのアカウント

**右上のアイコン　→　Setting　→　Developper Settings　→　Personal Access Tokens　→　Tokens（classsic）**

### Generate Keyで作成の設定ページ
**Note (説明文) : 空はNG
Expriration（期限）

Generateボタンを押す**

### 設定の確認

#### [[ユーザー名の登録]]

**ユーザー名の確認**
```zsh
git config --global user.name
#再設定（通常の設定で上書き）
```

**メールアドレス**
```zsh
git config --global user.email
# 再設定（通常の設定で上書き）
```

**ブランチ**
```zsh
git branch --contains
# 再設定（通常の設定で上書き）
```

**リモートURL確認**
```zsh
git remote -v
# 再設定
git remote set-url oringin < URL >
```

### 初回設定が終わったあとの、毎回の作業
```zsh
git add <　ファイル名　>
git commit -m '< message >'
git push -u origin main
```


index.html

linux.html : linux系のコマンド