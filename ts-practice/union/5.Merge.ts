type Merge<T, K> = Omit<T, keyof K> & K

type a351 = {
  el: string
  age: number
}

type a352 = {
  el: HTMLElement
  flag: boolean
}

type a353 = Merge<a351, a352> // {el:HtmlElement,age:number,flag:boolean}

const a = { ...({} as a353) }

console.log(a.el.scrollTop, a.age.toFixed(0), a.flag.valueOf())

console.log(a.el.charAt(0)) // error
