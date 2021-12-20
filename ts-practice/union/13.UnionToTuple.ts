type UnionToTuple<T> = T

type a3131 = UnionToTuple<1 | 2 | 3> // [1,2,3]
type a3132 = UnionToTuple<1 | string | boolean> // [1,string,boolean]
type a3133 = UnionToTuple<any> // [any]

type a3134 = UnionToTuple<string | number | symbol> // [symbol,number,string]

type a3135 = UnionToTuple<string | number | symbol | boolean>
// [boolean,symbol,number,string]

type a3136 = UnionToTuple<string | number | symbol | boolean | [boolean]>
// [boolean,[boolean],symbol,number,string]
