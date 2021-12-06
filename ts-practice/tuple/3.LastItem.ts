type LastItem<T extends any[]> = T extends [...infer L, infer R] ? R : never

type t3 = LastItem<[string, number, boolean]> // boolean
type u3 = LastItem<['B', 'F', 'E']> // 'E'
type p3 = LastItem<[]> // never
type l3 = LastItem<[1]> // never
