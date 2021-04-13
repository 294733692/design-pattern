/**
 * 单例模式
 * 场景：
 * 1.JQuery 只要一个$
 * 2.模拟登录框
 * 3.购物车
 * 4.vuex 和 redux 中的 store
 */

class SingleObject {
  login() {
    console.log('login...')
  }
}

SingleObject.getInstance = (function () {
  // 存储唯一实例
  let instance
  return function () {
    if (!instance) {
      instance = new SingleObject()
    }
    return instance
  }
})()


let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()

console.log('obj1 === obj2 ===>', obj1 === obj2)  // true

console.log('-----分割线-----')
let obj3 = new SingleObject() // 无法完全控制
obj3.login()
console.log('obj1 === obj3 ===>', obj1 === obj3)


