const myInstanceOf = (obj, type) => {
  if(!obj || typeof obj !== 'object') return false

  // 获取原型
  const proto = Object.getPrototypeOf(obj)
  while (true) {
    if(proto === null) return false
    if(proto === type.prototype) return true 
  }
}