type Splice<
  T extends any[],
  Start extends number,
  Length extends number,
  Replace extends any[] = [],
  CurrEq extends any[] = [],
  EndLen extends any[] = [],
  Res extends any[] = []
> = T extends [infer L, ...infer R]
  ? CurrEq['length'] extends Start
    ? EndLen['length'] extends Length
      ? [...Res, ...Replace, ...T]
      : Splice<R, Start, Length, Replace, CurrEq, [...EndLen, null], Res>
    : Splice<R, Start, Length, Replace, [...CurrEq, null], EndLen, [...Res, L]>
  : Res

type T13 = Splice<[string, number, boolean, null, undefined, never], 0, 2>
// [boolean,null,undefined,never]               从第0开始删除，删除2个元素

type U13 = Splice<[string, number, boolean, null, undefined, never], 1, 3>
// [string,undefined,never]                     从第1开始删除，删除3个元素

type P13 = Splice<[string, number, boolean, null, undefined, never], 1, 2, [1, 2, 3]>
// [string,1,2,3,null,undefined,never]          从第1开始删除，删除2个元素，替换为另外三个元素1,2,3
