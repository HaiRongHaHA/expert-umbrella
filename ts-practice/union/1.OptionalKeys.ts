export type OptionalKeys<T, K = keyof T> = K extends keyof T
  ? Omit<T, K> extends T
    ? K
    : never
  : never

type a31 = OptionalKeys<{ foo: number | undefined; bar?: string; flag: boolean }> // bar
type a32 = OptionalKeys<{ foo: number; bar?: string }> // bar
type a33 = OptionalKeys<{ foo: number; flag: boolean }> // never
type a34 = OptionalKeys<{ foo?: number; flag?: boolean }> // foo|flag
type a35 = OptionalKeys<{}> // never
