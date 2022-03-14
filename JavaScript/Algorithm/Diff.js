// 个人理解的diff算法的实现
// 虚拟DOM中key值的作用：当状态中的数据发生变化时，react/vue会根据新数据生成虚拟dom，随后react进行新虚拟dom和旧虚拟dom的比较
// 1.当旧虚拟DOM中找到了新虚拟DOM中的key
//  1.若旧虚拟DOM没有改变，直接使用之前的真实DOM
//  2.若旧虚拟DOM改变，则生成新的真实DOM
// 2.当旧虚拟DOM中找到了新虚拟DOM中的key
//  生成相应新的真实DOM