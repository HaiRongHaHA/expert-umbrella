type KebabCaseJoin<T extends string, S extends string = ''> = T extends ''
  ? S
  : T extends `${infer L}${infer R}`
  ? L extends Uppercase<L>
    ? KebabCaseJoin<R, `${S}-${Lowercase<L>}`>
    : KebabCaseJoin<R, `${S}${L}`>
  : never

type RemoveFirstKebab<T extends string> = T extends `-${infer R}` ? R : T

type KebabCase<T extends string> = RemoveFirstKebab<KebabCaseJoin<T>>

type A9 = KebabCase<'HandleOpenFlag'> // handle-open-flag
type B9 = KebabCase<'OpenFlag'> // open-flag
