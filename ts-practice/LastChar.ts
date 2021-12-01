type LastChar<T> = T extends `${infer f}${infer s}` ? (s extends `` ? f : LastChar<s>) : never

type A2 = LastChar<'BFE'> // 'E'
type B2 = LastChar<'dev'> // 'v'
type C2 = LastChar<''> // never
