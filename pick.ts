// https://www.typescriptlang.org/docs/handbook/utility-types.html

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

/**
 * Pick<>はインターフェイスの任意のプロパティを元に、新たなタイプを構築する。
 * |の場合はどちらかが欠けているとerrorになるのに対し、&の場合はtodo2とtodo3についてプロパティなしでもコンパイルが通る。
 */ 
type TodoPreview = Pick<Todo, "title" | "completed">; 

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
todo;

// const todo2: TodoPreview = {
// }
// const todo3: TodoPreview = {
//   title: 'hogeeeee'
// }

// console.log(todo2)
// console.log(todo3)
