import { FindIndex } from './10.FindIndex'

type TupleToEnum<T extends string[] = [], E extends boolean = false> = {
  readonly [K in T[number]]: E extends true ? FindIndex<T, K> : K
}

// 默认情况下，枚举对象中的值就是元素中某个类型的字面量类型
type a1 = TupleToEnum<['MacOS', 'Windows', 'Linux']>
// -> { readonly MacOS: "MacOS", readonly Windows: "Windows", readonly Linux: "Linux" }

// 如果传递了第二个参数为true，则枚举对象中值的类型就是元素类型中某个元素在元组中的index索引，也就是数字字面量类型
type a2 = TupleToEnum<['MacOS', 'Windows', 'Linux'], true>
// -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }

// T[number] 元组的所有key都是数字，所以T[number]可以取到元组内所有key
// 'MacOS' | 'Windows' | 'Linux'

// T[keyof T]
// type kk = { a: 1; b: 2; c: 3 }
// type oo = keyof kk
// a | b | c
