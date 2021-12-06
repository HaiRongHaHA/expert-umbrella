type Filter<T, P, U extends any[] = []> = T extends [infer L, ...infer R]
  ? Filter<R, P, L extends P ? [...U, L] : U>
  : U

type t9 = Filter<[1, 'BFE', 2, true, 'dev'], number> // [1, 2]
type u9 = Filter<[1, 'BFE', 2, true, 'dev'], string> // ['BFE', 'dev']
type p9 = Filter<[1, 'BFE', 2, any, 'dev'], string> // ['BFE', any, 'dev']
