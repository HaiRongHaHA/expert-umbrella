export type TupleToString<T, S extends string = ''> = T extends [infer L, ...infer R]
  ? L extends `${infer LL}`
    ? TupleToString<R, `${S}${LL}`>
    : S
  : S

type A4 = TupleToString<['a', 'b', 'c']> // 'abc'
type B4 = TupleToString<[]> // ''
type C4 = TupleToString<['a']> // 'a'

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^解法2^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
type TupleToString2<T> = T extends [infer L, ...infer R]
  ? L extends string
    ? `${L}${TupleToString2<R>}`
    : ''
  : ''

type A5 = TupleToString2<['a', 'b', 'c']> // 'abc'
type B6 = TupleToString2<[]> // ''
type C7 = TupleToString2<['a']> // 'a'
