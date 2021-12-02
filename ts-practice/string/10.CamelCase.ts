import { CapitalizeString } from './1.CapitalizeString'

type CamelCase<T extends string, S extends string = ''> = T extends ''
  ? S
  : T extends `${infer L}-${infer R}`
  ? CamelCase<R, `${S}${CapitalizeString<L>}`>
  : `${S}${CapitalizeString<T>}`

type A10 = CamelCase<'handle-open-flag'> // HandleOpenFlag
type B10 = CamelCase<'open-flag'> // OpenFlag
