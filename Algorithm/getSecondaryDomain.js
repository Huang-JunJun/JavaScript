const getSecondaryDomain = (url) => {
    const secondDomainIndex = url.lastIndexOf('.')
    return url.substr(secondDomainIndex + 1, url.length - 1)
}

const url = 'www.baidu.com'
console.log(getSecondaryDomain(url));