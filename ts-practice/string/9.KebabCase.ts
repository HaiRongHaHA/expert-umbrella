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

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^解法2^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
type Change<L extends string, K extends string> = `${K}${Uppercase<L> extends L
  ? `${K extends '' ? '' : '-'}${Lowercase<L>}`
  : L}`
type KebabCase2<T, K extends string = ''> = T extends `${infer L}${infer R}`
  ? KebabCase2<R, Change<L, K>>
  : K

type A9x = KebabCase2<'HandleOpenFlag'> // handle-open-flag
type B9x = KebabCase2<'OpenFlag'> // open-flag
