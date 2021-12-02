type FirstChar<T> = T extends `${infer l}${infer r}` ? `${l}` : never

type A = FirstChar<'BFE'> // 'B'
type B = FirstChar<'dev'> // 'd'
type C = FirstChar<''> // never
type D = FirstChar<222> // never
