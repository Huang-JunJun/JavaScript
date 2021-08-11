let arr = [4 ,1, 2, 3]
        let arr2 = ["zyx" ,"abc" , "oui"]

        // 用于检测是否为数组 返回true或者false
        console.log(Array.isArray(arr));
        // toString 方法 转换为字符串，在默认情况下都会以逗号分隔返回字符串
        console.log(arr.toString());
        // join 转换成字符串，并以括号内的字符串分割，返回字符串
        console.log(arr.join('!!'));
        // pop()移除最后面的数组元素
        // push()在数组最后面添加元素

        // shift()在数组最前面添加元素并返回该项
        arr.shift()
        console.log(arr);
        // unshuift()在数组前端添加任意个项，并返回数组长度
        console.log(arr.unshift(10));
        console.log(arr);

        // reverse()反转数组顺序，改变原数组
        console.log(arr.reverse());
        
        // sort()
        // 默认排序：该方法会调用每个数组项的toString() 方法，然后按照字符序列排序
        // 定义排序：该方法可以接受一个比较函数作为参数，比较函数有两个参数 .如果第一个参数位于第二个参数之前，返回负数 c.如果第一个参数位于第二个参数之后，返回正数
        console.log(arr.sort());
        // 可以进行字母之间的排序
        console.log(arr2.sort());
        // sort()方法改变原数组
        console.log(arr);

        // concat()拼接数组，先创建当前数组的一个副本，然后将接收到的参数添加到这个副本的末尾，返回这个副本，不改变原数组
        console.log(arr.concat([5 , 6]));
        // 不改变原数组
        console.log(arr);
        
        // slice()数组切割函数，可接收一个或者两个参数（返回项的起始位置，结束位置）
        // 当接受一个参数，从该参数指定的位置开始，到当前数组末尾的所有项。
        // 当接受两个参数，保留起始到结束之间的项，起始项会被删除，但是不包含结束位置的项。不改变原数组
        // 头从1开始计算
        console.log(arr.slice(1));
        console.log(arr);
        // 不改变原数组 返回的是删除的数组数据
        console.log(arr.slice(2,4));
        console.log(arr);
// 
        // splice()
        // 可以实现删除、替换、修改
        // 从0开始计算 1就是第二项数据开始
        // 删除：指定两个参数(起始位置，要删除的项数) 
        // 从1开始计算
        // 插入：指定三个参数(起始位置，0，要插入的任意数量的项) 
        // 替换：指定三个参数(起始位置，要删除的项数，要插入的任意数量的项)
        // 返回的是被删除的数据
        console.log(arr.splice(1,2));
        // 原数组改变
        console.log(arr);
        // 无返回值 返回的是空数组
        console.log(arr.splice(2,0,"Lemon","Kiwi"));
        // 原数组改变
        console.log(arr);

        // indexOf()
        // 从数组开头向后查找，使用全等操作符，找不到该元素返回-1。
        // 第一个参数为要查找的 项，第二个参数（可选）为索引开始位置 
        // 返回的是一个索引值
        console.log(arr.indexOf(2));      

        // every()
        // 对数组中的每一个元素运行给定一个函数，如果该函数对每一项都返回true，则该函数返回true
        var result = arr.every(function (item ,index ,arr) {
            return item > 2;
        })
        console.log(result); 

        // some()
        // 对数组中的某一个元素运行给定一个函数，如果该函数对每一项都返回true，则该函数返回true
        var result = arr.some(function (item ,index ,arr) {
            return item > 2;
        })
        console.log(result);

        // filter()
        // 对数组中的每一项运行给定的函数，会返回满足该函数的项组成的数组
        var result = arr.filter(function (item, index, arr) {
            return item > 3;
        });
        console.log(result);

        // map()
        // 对数组中的每一元素运行给定的函数，返回每次函数调用的结果组成的数组
        // 尽量避免map嵌套使用，容易出现数组中嵌套数组的情况
        var result = arr.map(function (item, index, arr) {
            return item * 2;
        });
        console.log(result);

        // forEach()
        // 对数组中的每一元素运行给定的函数，没有返回值，常用来遍历元素
        var result = arr.forEach(function (item, index, arr) {
            console.log(item);
        });