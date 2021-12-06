// ^^^^^^^^^^^^^^^^^^^^^^^^^^^解法1^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

type Flat<T, P extends any[] = []> = T extends [infer L, ...infer R]
  ? L extends [...infer RR]
    ? Flat<R, [...P, ...Flat<RR>]>
    : Flat<R, [...P, L]>
  : P

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^解法2^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

type Flat2<T> = T extends [infer L, ...infer R]
  ? [...(L extends any[] ? Flat2<L> : [L]), ...Flat2<R>]
  : T

type t7 = Flat2<[1, 2, 3]> // [1,2,3]
type u7 = Flat2<[1, [2, 3], [4, [5, [6]]]]> // [1,2,3,4,5,6]
type p7 = Flat2<[]> // []
type l7 = Flat2<[1]> // [1]
