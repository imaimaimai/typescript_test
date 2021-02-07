namespace generic{

  function a<T>(b: T): string{
    
    return b.toString();
  }

  console.log(a({c:2}))

  
}

