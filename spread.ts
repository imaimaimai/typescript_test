type obj = {
  a: number
  b: number
  c: number
}

const g = [1,2,3];
const h:obj = {
  a: 1,
  b: 2,
  c: 3,
}

function m (arr: number[], obj: obj) {

  console.log(...arr);
  console.log();
}

m(g,h);