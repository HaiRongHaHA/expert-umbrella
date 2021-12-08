type Filter<T, P, U extends any[] = []> = T extends [infer L, ...infer R]
  ? Filter<R, P, [L] extends [P] ? [...U, L] : U>
  : U

type t9 = Filter<[1, 'BFE', 2, true, 'dev'], number> // [1, 2]
type u9 = Filter<[1, 'BFE', 2, true, 'dev'], string> // ['BFE', 'dev']
type p9 = Filter<[1, 'BFE', 2, any, 'dev'], string> // ['BFE', any, 'dev']

// [L] extends [P] 对比的是具体的值，否则比的是类型，有any时会产生联合类型
// [] 避免 联合类型的 类型分发
// 不然就是个 xx | xx 联合类型

type ooo1 = any[] extends number[] ? 1 : 0 // 1

type ooo2 = any extends number ? 1 : 0 // 0 | 1
// any是很多个类型的联合，any extends number 相当于
// string extends number | number extends number | symbol extends number ……
// 0 | 1 | 0
// 所以得到的结果是 0 | 1

type ooo3 = [any] extends [number] ? 1 : 0
// 加元组类型就避免了分发，类型是元组类型了，不会触发分发

// 不触发分发
type ooo4 = number | string extends string ? 1 : 0

// 触发分发
type Boxed<T> = T extends string ? 1 : 0
type ooo5 = Boxed<string | number[]> // 0 | 1;

// 在触发分发的时候，any是有这个特性的，但是在判断是否可以赋值的时候就不行
// 在不分发的情况下，any可以赋值给number，但是string|number|symbol不行。
// 在分发的情况下，any与string|number|symbol一样，有些子类型可以赋值给number，有些值类型不可以赋值给number，所以得到的是1|0
