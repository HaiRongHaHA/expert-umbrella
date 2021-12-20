import { OptionalKeys } from './1.OptionalKeys'

type PickOptional<T> = Pick<T, OptionalKeys<T>>

type a321 = PickOptional<{ foo: number | undefined; bar?: string; flag: boolean }> // {bar?:string|undefined}
type a322 = PickOptional<{ foo: number; bar?: string }> // {bar?:string}
type a323 = PickOptional<{ foo: number; flag: boolean }> // {}
type a324 = PickOptional<{ foo?: number; flag?: boolean }> // {foo?:number,flag?:boolean}
type a325 = PickOptional<{}> // {}
