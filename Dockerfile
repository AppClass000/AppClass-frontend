# Node公式の軽量イメージを使用
FROM node:20-slim

# 作業ディレクトリの作成
WORKDIR /app

# 依存ファイルのコピーとインストール
COPY package*.json ./
RUN npm install

# 残りのファイルをコピー
COPY . .

# プロダクションビルド
RUN npm run build

# 静的ファイル配信用のサーバーをインストール
RUN npm install -g serve

# ポート指定（Railwayが使用する）
EXPOSE 3000

# 本番用にビルドしたものをserveでホスト
CMD ["serve", "-s", "build", "-l", "3000"]
