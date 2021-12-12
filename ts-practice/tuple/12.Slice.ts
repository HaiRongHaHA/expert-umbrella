type Slice<
  T extends any[],
  Start extends number,
  End extends number = T['length'],
  StartEq extends any[] = [],
  EndEq extends any[] = [],
  Res extends any[] = []
> = T extends [infer L, ...infer R]
  ? StartEq['length'] extends Start
    ? EndEq['length'] extends End
      ? [...Res, L]
      : Slice<R, Start, End, StartEq, [...EndEq, null], [...Res, L]>
    : Slice<R, Start, End, [...StartEq, null], [...EndEq, null], Res>
  : Res

type T12 = Slice<[any, never, 1, '2', true, boolean], 0, 2>
// [any,never,1]                    从第0个位置开始，保留到第2个位置的元素类型

type U12 = Slice<[any, never, 1, '2', true, boolean], 1, 3>
// [never,1,'2']                    从第1个位置开始，保留到第3个位置的元素类型

type P12 = Slice<[any, never, 1, '2', true, boolean], 1, 2>
// [never,1]                        从第1个位置开始，保留到第2个位置的元素类型

type L12 = Slice<[any, never, 1, '2', true, boolean], 2>
// [1,'2',true,boolean]             从第2个位置开始，保留后面所有元素类型

type E12 = Slice<[any], 2>
// []                               从第2个位置开始，保留后面所有元素类型

type T121 = Slice<[], 0>
// []                               从第0个位置开始，保留后面所有元素类型
