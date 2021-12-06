type ReverseTuple<T extends any[], P extends any[] = []> = T extends [infer L, ...infer R]
  ? ReverseTuple<R, [L, ...P]>
  : P

type t6 = ReverseTuple<[string, number, boolean]> // [boolean, number, string]
type u6 = ReverseTuple<[1, 2, 3]> // [3,2,1]
type p6 = ReverseTuple<[]> // []
