type IsNever<T> = [T] extends [never] ? true : false

type a361 = IsNever<never> // true
type a362 = IsNever<string> // false
type a363 = IsNever<undefined> // false
type a364 = IsNever<any> // false
