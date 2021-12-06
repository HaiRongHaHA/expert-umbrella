type FirstItem<T extends any[]> = T extends [infer L, ...infer R] ? L : T

type t2 = FirstItem<[string, number, boolean]> // string
type u2 = FirstItem<['B', 'F', 'E']> // 'B'
