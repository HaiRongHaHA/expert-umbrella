type CheckNever<T> = T extends never ? never : 'no'
type CheckAny<T> = CheckNever<T> extends 'no' ? T : any

type Equal<T, K> = [T] extends [K] // any = 任何值  任何值 = any
  ? [K] extends [T] // 任何值 != never  never === 任何值
    ? keyof T extends keyof K // any never keyof都是一样的
      ? keyof K extends keyof T // 任何值的keyof 和 any never的keyof 比都是 true
        ? true
        : false
      : false
    : false
  : false

type FindIndex<T, V, P extends any[] = []> = T extends [infer L, ...infer R]
  ? Equal<L, V> extends true
    ? P['length']
    : FindIndex<R, V, [...P, L]>
  : never

type t10 = [any, never, 1, '2', true]

type u10 = FindIndex<t10, 1> // 2
type p10 = FindIndex<t10, 3> // never
type l10 = FindIndex<t10, '2'> // 3
type e10 = FindIndex<t10, never> // 1

type io1 = [1] extends [never] ? 2 : 0 // 0 任何值跟不存在比都是任何值
type io2 = [never] extends [1] ? 2 : 0 // 2 不存在跟任何值比都是不存在

interface hhh {
  a: 1
}

type aeer = keyof any
type aeer2 = keyof 1
type aeer3 = keyof '1'
type aeer4 = keyof true
type aeer5 = keyof [1]
type aeer6 = keyof ['2', '2']
type aeer7 = keyof never
type aeer8 = keyof void
type aeer9 = keyof hhh

type dfk = keyof [1, 2] extends any ? true : false

type Ta<T, K> = keyof K extends keyof T ? true : false

type kk = Ta<never, 1>
type kk2 = Ta<any, '2'>
type kk3 = Ta<'2', never>
type kk4 = Ta<any, never>
type kk5 = Ta<'any', any>
type kk6 = Ta<any, any>
type kk7 = Ta<never, never>
type kk8 = Ta<1, 1>

// any never keyof都是一样的
// any never 和 任何值 比 就是 false
// 因为any never是联合类型
// 数字1不能是 number | string | symbol 这三种类型，所以是false

// 任何值的keyof 和 any never的keyof 比都是 true
// 因为其他类型keyof后的值都属于 number | string | symbol 这三种类型
