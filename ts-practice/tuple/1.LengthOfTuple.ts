type LengthOfTuple<T extends string[]> = T['length']

type t1 = LengthOfTuple<['B', 'F', 'E']> // 3
type u1 = LengthOfTuple<[]> // 0
