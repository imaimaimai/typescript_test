// 制限付きポリモーフィズム p.78

type TreeNode = {
  value: string
}

type LeafNode = TreeNode & {
  isLeaf: true
}

type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode]
}

function mapNode<T extends TreeNode>(
  node: T,
  f:(value: string) => string
): T {
  return {
    ...node, // 古いTreeNodeオブジェクトとマージする。古いvalueは下記f(node.value)で上書きされる。その挙動は下記プロパティvalueの名前をvalue2とか適当な名前に変えてみると分かる
    value: f(node.value)
  }
}

const a: TreeNode = {value: 'a'}
const b: LeafNode = {value: 'b', isLeaf: true}
const c: InnerNode = {value: 'c', children: [b]}

const a1 = mapNode(a, _ => _.toUpperCase());
const b1 = mapNode(b, _ => _.toUpperCase());
const c1 = mapNode(c, _ => _.toUpperCase());

console.log(a1,b1,c1)