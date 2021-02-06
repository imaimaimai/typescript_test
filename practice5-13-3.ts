// 練習問題 p.116-4-b

namespace Builder {

  // typeでも動く
  interface BuildableRequest {
    data?: object
    method: 'get' | 'post'
    url: string
  }

  class RequestBuilder2{
    data?: object
    method?: 'get' | 'post'
    url?: string

    setData(data: object): this & Pick<BuildableRequest,"data"> {

      /**
       * Object.assignは、1つ以上のオブジェクトを結合して返す。
       * 同じプロパティが複数ある場合は、一番後のオブジェクトの値が優先される。
       * target（第一引数のオブジェクト）だけがミュータブルで、中身が変更されてしまう点は要注意。
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
       */
      return Object.assign(this, {data}) 
    }

    setMethod(method: 'get' | 'post'): this & Pick<BuildableRequest, "method"> {
      return Object.assign(this, {method})
    }

    setUrl(url: string): this & Pick<BuildableRequest, "url"> {
      return Object.assign(this, {url})
    }

    // 最後にインターフェイスを噛ませることで、必須のプロパティが無い場合にコンパイルエラーを起こさせる
    build(this: BuildableRequest) {
      return this
    }
  }


  const a = new RequestBuilder2()
    .setData({})
    .setMethod('get')
    .setUrl('foo.com')
    // .setMethod('post')
    .build()

  console.log(a)
}

