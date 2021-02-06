namespace Builder {

  class RequestBuilder {

    private data: object | null = null // nullで初期化
    private method: 'get' | 'post' | null = null
    private url: string | null = null

    setMethod(method: 'get' | 'post'): this {
      this.method = method
      return this
    }

    setData(data: object): this {
      this.data = data
      return this
    }

    setUrl(url: string): this {
      this.url = url
      return this
    }

    send() {
      console.log(this)
    }
  }

  new RequestBuilder().send()

}

