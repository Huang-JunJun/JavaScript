// 代理与反射
const target = {
  id: 'target'
}
const handler = {}

const proxy = new Proxy(target, handler)