type CapitalizeString<T> = T extends `${infer l}${infer r}` ? `${Uppercase<l>}${r}` : T

type a1 = CapitalizeString<'handler'> // Handler
type a2 = CapitalizeString<'parent'> // Parent
type a3 = CapitalizeString<233> // 233
