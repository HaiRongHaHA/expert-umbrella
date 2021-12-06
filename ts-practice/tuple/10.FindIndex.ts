type FindIndex<T, V, P extends any[] = []> = T extends [infer L, ...infer R]
  ? L extends V
    ? P['length']
    : FindIndex<R, V, [...P, L]>
  : never

type t10 = [any, never, 1, '2', true]

type u10 = FindIndex<t10, 1> // 2
type p10 = FindIndex<t10, 3> // never
