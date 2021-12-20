type IsAny<T> = [any] extends [T]
  ? keyof T extends keyof any
    ? keyof any extends keyof T
      ? true
      : false
    : false
  : false

type a381 = IsAny<string> // false
type a382 = IsAny<any> // true
type a383 = IsAny<unknown> // false
type a384 = IsAny<never> // false
type a385 = IsAny<number> // false
type a386 = IsAny<[]> // false
type a387 = IsAny<Object> // false
type a388 = IsAny<object> // false
