/**
 * 工厂模式
 * 应用场景
 * 1.JQuery - $('div')
 * 2.React.createElement
 * 3.Vue 异步组件
 */
class Product {
  constructor(name) {
    this.name = name
  }

  init() {
    alert('int')
  }

  fun1() {
    alert('fun1')
  }

  fun2() {

  }
}

/**
 * 工厂函数
 */
class Creator {
  create(name) {
    return new Product(name) // 返回实例化
  }
}

// 测试
let creator = new Creator()
let p = creator.create('p1')
p.init()
p.fun1()
