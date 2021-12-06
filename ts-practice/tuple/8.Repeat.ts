type Repeat<T, Count extends number, P extends any[] = []> = P['length'] extends Count
  ? P
  : Repeat<T, Count, [...P, T]>

type t8 = Repeat<number, 3> // [number, number, number]
type u8 = Repeat<string, 2> // [string, string]
type p8 = Repeat<1, 1> // [1]
type l8 = Repeat<0, 0> // []
