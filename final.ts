// finalクラス p.112

class MessageQueue {
  protected constructor(private messages: string[]) {} // protectedだと拡張はできるがnewできなくなる。
}

class BadQueue extends MessageQueue {} // error

new MessageQueue([]); // error
/**
 * クラスコンストラクターにprivateを設定すると、拡張できなくなるだけでなく、インスタンスをnewすることもできなくなる。
 * 拡張はして欲しくないが、newはしたい場合、以下のようにする。 
 *
*/
// class MessageQueue {
//   private constructor(private messages: string[]) {}
//   static create(messages: string[]) {
//     return new MessageQueue(messages)
//   }
// }

// class BadQueue extends MessageQueue{}

// MessageQueue.create([]);