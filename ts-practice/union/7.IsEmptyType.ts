type IsEmptyType<T> = number extends T
  ? keyof T extends never
    ? T extends {}
      ? true
      : false
    : false
  : false

type a371 = IsEmptyType<string> // false
type a372 = IsEmptyType<{ a: 3 }> // false
type a373 = IsEmptyType<{}> // true
type a374 = IsEmptyType<any> // false
type a375 = IsEmptyType<object> // false
type a376 = IsEmptyType<Object> // false
type a377 = IsEmptyType<unknown> // false
type a378 = IsEmptyType<never> // false
type a379 = IsEmptyType<number> // false
type a3701 = IsEmptyType<[]> // false
type a3802 = IsEmptyType<[1]> // false

const h: a377 = true //运行报错
// const g: a377 = false
