/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
 var replaceSpaces = function(S) {

    return S.split(' ').join('%20')
};

let s = "Mr John Smith"
console.log(replaceSpaces(s,13));