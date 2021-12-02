type SplitString<S extends string, P extends string, T extends string[] = []> = S extends ''
  ? T
  : S extends `${infer L}${P}${infer R}` // 分割
  ? SplitString<R, P, [...T, L]>
  : [...T, S]

type A6 = SplitString<'handle-open-flag', '-'> // ["handle", "open", "flag"]
type B6 = SplitString<'open-flag', '-'> // ["open", "flag"]
type C6 = SplitString<'handle.open.flag', '.'> // ["handle", "open", "flag"]
type D6 = SplitString<'open.flag', '.'> // ["open", "flag"]
type E6 = SplitString<'open.flag', '-'> // ["open.flag"]
