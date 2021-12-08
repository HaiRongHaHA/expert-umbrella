// class Base {
//   static $instance

//   $name: string

//   $createTime: number
// }

// /**
//  * 不使用任何 any 补充完整 Mi 和 Single 的类型定义
//  */
// class Mi extends Base {
//   getInfo() {
//     console.log('createTime:', this.$createTime)
//   }
// }

// type TInstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R
//   ? R
//   : any

// type TType = TInstanceType<typeof Mi>

// type TTest = new (...args: any) => any

// function Single<T extends typeof Base>(Constructor: T): InstanceType<T> {
//   if (Constructor.$instance == null) {
//     Constructor.prototype.$name = Constructor.name
//     Constructor.prototype.$createTime = Date.now()
//     Constructor.$instance = new Constructor()
//   }
//   return Constructor.$instance
// }

// const m = Single(Mi)

// m.getInfo()

// setTimeout(() => {
//   const m = Single(Mi)
//   m.getInfo()
// }, 1000)
