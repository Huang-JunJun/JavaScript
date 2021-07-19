// 日期转化函数
// 需要实现功能：当在输入了大于等于24小时就转化成相应的天数，当输入了大于等于60分钟就转化成相应的天数和小时数
// 数值范围：天 时 分 都在0~9999 暂时先不考虑天数超越极限的情况

// 先进行分转化，再统一进行小时转化
// 传入的参数分别为 天 时分
function transformDate(hour,min) {
    
    let newDay,newHour,newMin,

    function transformMin(min) {
        
        if(min >= 60) {
            newMin = min % 60
            newHour = min / 60
        } else {
            newMin = min
        }
    }
    
    // 如果天数大于等于24就转化为天数
    if(hour >= 24) {
        newHour = hour % 24
        newDay = hour / 24
    } else {
        newHour = hour
    }
    
}