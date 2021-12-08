import { TupleToString } from './5.TupleToString'

type Repeat<
  Char extends string,
  Count extends number,
  Tuple extends string[] = []
> = Tuple['length'] extends Count ? TupleToString<Tuple> : Repeat<Char, Count, [...Tuple, Char]>

type RepeatString<T extends string, C extends number> = C extends 0 ? '' : Repeat<T, C, [T]>

type A5 = RepeatString<'a', 3> // 'aaa'
type B5 = RepeatString<'a', 0> // ''
type C5 = RepeatString<'a', 1> // 'a'
type D5 = RepeatString<'a', 2> // 'aa'
