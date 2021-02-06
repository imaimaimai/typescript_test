type Context = {
  appId?: string
  userId?: string
}

function log (message: string, context: Context = {appId:"1",userId:"2"}) {
  let time = new Date().toISOString()
  console.log(time, message, context.appId, context.userId);
}

log('OK', {
  // appId: "feffeefe",
  userId: "3"
})