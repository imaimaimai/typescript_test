import "reflect-metadata";

/**
 * 過剰プロパティチェック p.128
 * その型がフレッシュである場合に行われる、プロパティがその型に含まれるかどうかのチェック。
 * 型アサーションを使用するか、変数に割り当てられる場合、その型のフレッシュさが失われ、過剰プロパティチェックは行われなくなる。
 */

type Options = {
   baseUrl: string
   cacheSize?: number
   tier?: 'prod' | 'dev'
}

class API {
  constructor(private options: Options) {}
}

new API ({
  baseUrl: 'https://api.mysite.com',
  tier: 'prod'
})

new API({
  baseUrl: 'https://api.mysite.com',
  badTier: 'prod' // エラー。1.型が推論される 2.オブジェクトが変数に割り当てられていない 3.その型について型アサーションを作成していない 以上から、過剰プロパティチェックが実行される
})

new API({
  baseUrl: 'https://api.mysite.com',
  badTier: 'prod'
} as Options) // 型アサーション。エラーにはならないが、badTierの型がリテラル方のスーパータイプであるstringに置き換わる

let badOptions = {
  baseUrl: 'https://api.mysite.com',
  badTier: 'prod'
}

new API(badOptions) // オブジェクトを予め変数に代入した場合、エラーにならない

let options: Options = {
  baseUrl: 'https://api.myite.com',
  badTier: 'prod' // 過剰であるかのチェックがnewする時ではなく変数の宣言時に行われることに注意
}

new API(options)

Reflect.