## 概要

Next.jsとSupabaseとHasuraで構築されたTODOのwebアプリケーション

- supabaseのdatabaseであるpostgreSQLの拡張機能であるpg_graphqlを使用してgraphQLでDBを操作する
- graphQLクライアントはapolloを使用する
- supabaseのDBとgraphQLサーバー、HasuraのgraphQLサーバー、両方試す
- supabaseのauthをHasuraの認可認証と連携する

## 開発環境

- next 14.1.0
- react 18.2.0
- supabase 2.41.1
- tailwind 3.4.3
- graphql 16.8.1
- apollo/client 3.9.9
- graphql-codegen/cli 5.0.2
- typescript 5.4.3

```text
/ 
├── __generated__
├── components
├── lib
├── pages
├── styles
├── codegen.ts
└── constants.ts

supabase <-> Hasura <-> apollo -> next

```

## まとめ
- graphqlのクエリはsupabase studioやapollo studioのGUIで簡単に作成できる
- apolloクライアントはreactのcontextやproviderに似ている
- 単純な接続だけならミドルウェア的な感じではなくclientにまとめられる
- supabaseとgraphql code generatorの設定も問題なく、型生成もつまる部分はない
- supabaseとHasuraの連携も直ぐ終わるが、問題はJWTでの認証
- JWTペイロードデータの知識がないと全く分からない
- auth0とfirebaseでの認証はテンプレートがあるがsupabaseはない
- Hasuraへの送信時にヘッダーに認証情報を設定する
- HasuraのenvにJWTペイロード検証の為の設定をする
- roleにadminとuserを作成しx-hasura-user-idにsubを入れる
- permissionでidやuidをeq x-hasura-user-idとすれば認証できる
- フロントエンドのapiを使用せず、SQLも書かないでDB操作ができるのは新鮮
- キャッシュの扱いは分かっていない事が多いが、サーバー負荷を軽減できるのは良いと思う



