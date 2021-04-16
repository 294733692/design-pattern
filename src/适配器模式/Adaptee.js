/**
 * 适配器模式
 * 应用场景
 * 1.封装旧接口
 * 2.Vue computed
 *
 */
class Adaptee {
  specificRequest() {
    return '德国标准插头'
  }
}

class Target {
  constructor() {
    this.info = new Adaptee()
  }

  request() {
    let info = this.info.specificRequest()
    return `${info} -> 中国制造`
  }
}

let target = new Target()
console.log(target.request())
