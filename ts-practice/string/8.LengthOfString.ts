type LengthOfString<T extends string, C extends string[] = []> = T extends ''
  ? C['length']
  : T extends `${infer L}${infer R}`
  ? LengthOfString<R, [...C, L]>
  : never

type A7 = LengthOfString<'BFE.dev'> // 7
type B7 = LengthOfString<''> // 0
