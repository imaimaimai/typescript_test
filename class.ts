//クラスと継承 p.87

namespace a {
  class Game {
    private pieces = Game.makePieces()

    private static makePieces () {
      return [
        new King('White', 'E', 1),
        new King('Black', 'E', 8),

        new Queen('White', 'D', 1),
        new Queen('Black', 'D', 8),

        new Bishop('White', 'C', 1),
        new Bishop('White', 'F', 1),
        new Bishop('Black', 'C', 8),
        new Bishop('Black', 'F', 8)
      ]
    }

   }

  abstract class Piece { 
    protected position: Position

    constructor(
      private readonly color: Color,
      file:File,
      rank: Rank
    ) {
      this.position = new Position(file,rank);
    }

    moveTo(position:Position) {
      this.position = position
    }

    abstract canMoveTo (position: Position) : boolean // 抽象メソッドは、その抽象クラスを継承するサブクラスが実装していないとコンパイルエラーになる

  }

  class Position {
    constructor(
      private file: File,
      private rank: Rank
    ) {

    }

    distanceFrom(position: Position) { // アクセス修飾子をつけないとデフォルトでPublicになる
      return {
        rank: Math.abs(position.rank - this.rank),
        file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
      }
    }
  }

  class King extends Piece { 
    canMoveTo(position: Position) {
      let distance = this.position.distanceFrom(position)
      return distance.rank < 2 && distance.file < 2
    }
  }

  class Queen extends Piece {
    canMoveTo(position: Position) {
      super.moveTo(position) // superによる親クラスのメソッド呼び出し
      return true;
    }

    constructor(color: Color, file:File, rank:Rank) {
      super(color,file,rank) // superによる親クラスのコンストラクタ呼び出し
    }
  }
  
  class Bishop extends Piece { }
  class Knight extends Piece { }
  class Rook extends Piece { }
  class Pawn extends Piece { }

  type Color = 'Black' | 'White'
  type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
  type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

  // const piece = new Piece() // 抽象クラスはインスタンス化できない

}
