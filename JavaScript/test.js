let url = 'http://localhost:8001/#/?sessionId=1380438334198829058_1_1_1'
let index = url.lastIndexOf('=')
let str = url.substring(index+1,url.length)
let sessionId
if(url && url.includes('sessionId')) {
    let index = url.lastIndexOf('=')
    let str = url.substring(index+1,url.length)
    sessionId = str
}
console.log(str);
console.log(sessionId);