// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 数字类型枚举与字符串类型 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
enum Color {
  Red,
  Green,
  Blue
}

let col = Color.Red
col = 0 // 有效的，这也是 Color.Red

// 类型安全
// col = 'Red'

Color[0] // 'Red'
Color['Red'] // 0
Color[Color.Red] // 'Red' because Color.Red === 0 and Color[0] === 'Red'

enum Tristate {
  False,
  True,
  Unknown
}
Tristate[0]
Tristate['False']
Tristate[Tristate.False]

/*
枚举 Tristate 编译后对应的js代码如下

var Tristate
;(function (Tristate) {
  Tristate[(Tristate['False'] = 0)] = 'False'
  Tristate[(Tristate['True'] = 1)] = 'True'
  Tristate[(Tristate['Unknown'] = 2)] = 'Unknown'
})(Tristate || (Tristate = {}))

得到的Tristate结果如下

{
  '0': 'False',
  '1': 'True',
  '2': 'Unknown',
  False: 0,
  True: 1,
  Unknown: 2
}
*/

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 使用数字类型作为标志 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// 默认情况下，第一个枚举值是 0，然后每个后续值依次递增 1：
enum Color {
  DarkRed = 3, // 3
  DarkGreen, // 4
  DarkBlue // 5
}

// 我通常用 = 1 初始化，因为在枚举类型值里，它能让你做一个安全可靠的检查。

enum AnimalFlags {
  None = 0,
  HasClaws = 1 << 0, // 0001
  CanFly = 1 << 1, // 0010
  FlyClawed = HasClaws | CanFly // 组合标志
}

interface Animal {
  flags: AnimalFlags
  [key: string]: any
}

function printAnimalAbilities(animal: Animal) {
  var animalFlags = animal.flags
  if (animalFlags & AnimalFlags.HasClaws) {
    console.log('animal has claws')
  }
  if (animalFlags & AnimalFlags.CanFly) {
    console.log('animal can fly')
  }
  if (animalFlags === AnimalFlags.None) {
    console.log('nothing')
  }
}

var animal = { flags: AnimalFlags.None }
printAnimalAbilities(animal) // nothing

animal.flags |= AnimalFlags.HasClaws
printAnimalAbilities(animal) // animal has claws

animal.flags &= ~AnimalFlags.HasClaws
printAnimalAbilities(animal) // nothing

animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly
printAnimalAbilities(animal) // animal has claws, animal can fly

console.log('---------------------')

animal.flags |= AnimalFlags.FlyClawed
printAnimalAbilities(animal) // animal has claws, animal can fly

/*
  1、使用 |= 来添加一个标志；
  2、组合使用 &= 和 ~ 来清理一个标志；
  3、| 来合并标志。
*/

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 常量枚举 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
const enum Tristate2 {
  False,
  True,
  Unknown
}

const lie = Tristate2.False

/*
  将编译成
  let lie = 0
  不会编译枚举Tristate2的定义
  如果想编译出Tristate2的定义，可以打开preserveConstEnums
 */

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 有静态方法的枚举 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// 使用 enum + namespace 的声明的方式向枚举类型添加静态方法

enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

namespace Weekday {
  export function isBusinessDay(day: Weekday) {
    switch (day) {
      case Weekday.Saturday:
      case Weekday.Sunday:
        return false
      default:
        return true
    }
  }
}

const mon = Weekday.Monday
const sun = Weekday.Sunday

console.log(Weekday.isBusinessDay(mon)) // true
console.log(Weekday.isBusinessDay(sun)) // false
