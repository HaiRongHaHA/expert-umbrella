import { RequiredKeys } from './3.RequiredKeys'
type PickRequired<T> = Pick<T, RequiredKeys<T>>

type a341 = PickRequired<{ foo: number | undefined; bar?: string; flag: boolean }> // {foo:number|undefined,flag:boolean}
type a342 = PickRequired<{ foo: number; bar?: string }> // {foo:number}
type a343 = PickRequired<{ foo: number; flag: boolean }> // {foo:number,flag:boolean}
type a344 = PickRequired<{ foo?: number; flag?: boolean }> // {}
type a345 = PickRequired<{}> // {}
