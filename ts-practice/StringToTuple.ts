type StringToTuple<s extends string, t extends string[] = []> = s extends ''
  ? t
  : s extends `${infer l}${infer r}`
  ? StringToTuple<r, [...t, l]>
  : never

type A3 = StringToTuple<'BFE.dev'> // ['B', 'F', 'E', '.', 'd', 'e','v']
type B3 = StringToTuple<''> // []
