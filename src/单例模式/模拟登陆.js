class LoginForm {
  constructor() {
    this.state = 'hide'
  }

  show() {
    if (this.state === 'show') {
      alert('已经显示')
      return
    }
    this.state = 'show'
    console.log('登录框显示成功')
  }

  hide() {
    if (this.state === 'hide') {
      alert('已经隐藏')
      return
    }
    this.state = "hide"
    console.log('登录框隐藏成功')
  }
}

LoginForm.getInstace = (function () {
  let instance
  return function () {
    if (!instance) instance = new LoginForm()
    return instance
  }
})()

// 测试代码
let login1 = LoginForm.getInstace()
login1.show()

let login2 = LoginForm.getInstace()
login2.hide()
