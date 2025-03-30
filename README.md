# Dim Color Bulbs

SwitchBot API を使用して SwitchBot Color Bulb を一括操作する TypeScript アプリケーションです。

## 必要条件

- Node.js (v.20.6.0 以上)
- SwitchBot アカウント
- SwitchBot Color Bulb
- SwitchBot API トークンとシークレット

> [!IMPORTANT]
> Node.js v.20.6.0 以上としているのは、環境変数を `--env-file` フラグで読み込むためです。dotenv 等でやりくりできる場合はこれ以下でも構いません

## インストール

1. このリポジトリをクローンする:

   ```bash
   git clone https://github.com/yhakamay/dim-color-bulbs.git
   cd dim-color-bulbs
   ```

2. 必要な依存関係をインストールする:

   ```bash
   npm install
   ```

3. `.env.local` をプロジェクトルートに作成し、以下の環境変数を設定する

   ```plaintext
   TOKEN=<Your SwitchBot API Token>
   SECRET=<Your SwitchBot API Secret>
   ```

   > [!NOTE]
   > 取得方法は以下を参照してください: https://blog.switchbot.jp/announcement/api-v1-1/

## 使用方法

1. プロジェクトを実行するには、以下のコマンドを使用します:

   ```bash
   npx tsx --env-file=.env.local index.ts
   ```

2. アプリケーションは以下の操作を順に実行します:

   - カラーバルブデバイスの取得
   - カラーバルブをオンにする
   - カラーバルブの色を `255:0:255` に設定する
   - カラーバルブの明るさを `2` に設定する

## プロジェクト構成

```
dim-color-bulbs/
├── .env.local # 環境変数ファイル
├── index.ts # メインエントリーポイント
├── utils/ # ユーティリティ関数
│ ├── generateSign.ts # API 認証用の署名生成
│ ├── getDeviceIDs.ts # デバイス ID の取得
│ ├── sendCommand.ts # API コマンド送信
│ ├── setBrightness.ts # 明るさの設定
│ ├── setColor.ts # 色の設定
│ └── turnOnColorBulbs.ts # カラーバルブのオン
```

## 注意事項

- SwitchBot API の利用にはインターネット接続が必要です
- 環境変数が正しく設定されていない場合、アプリケーションはエラーをスローします

## 参照

- https://github.com/OpenWonderLabs/SwitchBotAPI/blob/main/README.md
- https://tsx.is/
