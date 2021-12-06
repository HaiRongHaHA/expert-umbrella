type Shift<T extends number[]> = T extends [infer L, ...infer R] ? [...R] : []

type t4 = Shift<[1, 2, 3]> // [2,3]
type u4 = Shift<[1]> // []
type p4 = Shift<[]> // []
