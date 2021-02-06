// 練習問題 p.116-4-a

namespace Builder {


  // type Request = {
  //   data: object | null,
  //   method: 'get' | 'post' | null,
  //   url: string | null
  // }

  class RequestBuilder{

    protected data: object | null = null // nullで初期化。protectedは継承が可能
    protected method: 'get' | 'post' | null = null
    protected url: string | null = null

    setMethod(method: 'get' | 'post'): RequestBuilderWithMethod {
      return new RequestBuilderWithMethod().setMethod(method).setData(this.data)
    }

    setData(data: object | null): this{
      this.data = data
      return this
    }
  }

  class RequestBuilderWithMethod extends RequestBuilder{

    setMethod(method: 'get' | 'post' | null): this {
      this.method = method
      return this
    }
    
    setUrl(url: string): RequestBuilderWithMethodAndUrl {
      return new RequestBuilderWithMethodAndUrl().setMethod(this.method).setUrl(url).setData(this.data)
    }
    
  }

  class RequestBuilderWithMethodAndUrl extends RequestBuilderWithMethod {

    setUrl(url: string):this {
      this.url = url
      return this
    }
    send() {
      console.log(this)
    }

  }



  new RequestBuilder()
    .setData({})
    .setMethod('get')
    .setUrl('foo.com')
    .send()

}

