export type RequiredKeys<T, K = keyof T> = K extends keyof T
  ? Omit<T, K> extends T
    ? never
    : K
  : never

type a331 = RequiredKeys<{ foo: number | undefined; bar?: string; flag: boolean }> // foo|flag
type a332 = RequiredKeys<{ foo: number; bar?: string }> // foo
type a333 = RequiredKeys<{ foo: number; flag: boolean }> // foo|flag
type a334 = RequiredKeys<{ foo?: number; flag?: boolean }> // never
type a335 = RequiredKeys<{}> // never
