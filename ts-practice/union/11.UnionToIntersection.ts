type UnionToIntersection<T> = T

type a3111 = UnionToIntersection<{ a: string } | { b: string } | { c: string }>
// {a: string} & {b: string} & {c: string}

type aa = { a: string } | { b: string } | { c: string }

type bb = k extends keyof aa ? k : 0
