type LengthOfString<T extends string, C extends string[] = []> = T extends ''
  ? C['length']
  : T extends `${infer L}${infer R}`
  ? LengthOfString<R, [...C, L]>
  : never

type A = LengthOfString<'BFE.dev'> // 7
type B = LengthOfString<''> // 0
