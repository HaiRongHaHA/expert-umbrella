/**
 * 不使用任何 any 补充完整 Mi 和 Single 的类型定义
 */

class Mi {
  static $instance: Mi
  $name?: string
  $createTime?: number

  getInfo() {
    console.log('createTime:', this.$createTime)
  }
}
type a = typeof Mi

type b = InstanceType<a>

function Single(Constructor: a): b {
  if (Constructor.$instance == null) {
    Constructor.prototype.$name = Constructor.name
    Constructor.prototype.$createTime = Date.now()
    Constructor.$instance = new Constructor()
  }
  return Constructor.$instance
}

const m = Single(Mi)

m.getInfo()

setTimeout(() => {
  const m = Single(Mi)
  m.getInfo()
}, 1000)
