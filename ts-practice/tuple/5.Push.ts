type Push<T extends number[], P extends number> = [...T, P]

type t5 = Push<[1, 2, 3], 4> // [1,2,3,4]
type u5 = Push<[1], 2> // [1, 2]
