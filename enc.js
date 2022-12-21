const fs = require('fs')
let string = fs.readFileSync('./index.hs', 'utf8')

function randomString(length) {
    let result = '';
    let characters = "`1234567890-=~!@#$%^&*()_+qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM[]\\;',./{}|:\"<>? ";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result
}

function encrypt(arr) {
    if (arr.length == 0) return
    let randVal = randomString(8)
    valsMap.set(arr[0], randVal)
    vals1.splice(vals1.indexOf(arr[0]), 1)
    if (arr.length != 0) return encrypt(arr)
}
let valsMap = new Map()
let vals1 = ("`1234567890-=~!@#$%^&*()_+qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM[]\\;',./{}|:\"<>? ").split('')

encrypt(vals1)
valsMap.set('\n',`\n${randomString(7)}`)
const envalue = string.split('').map(ch => {
    return valsMap.get(ch)
}).join('')

console.log(envalue)

//decrypt
function revMap (map) {
    let resultMap = new Map()
    map.forEach((key, value) => {
        resultMap.set(key, value)
    })
    return resultMap
}
let RvalsMap = revMap(valsMap)
if (envalue.length % 8 != 0) return console.error('godielol')
function sliceStr(str, result) {
    let part1 = str.split('').slice(0, 8).join('')
    result.push(part1)
    let part2 = str.split('').slice(8).join('')
    if (part2 != '') return sliceStr(part2, result)
    else return result
}
let encryptArr = sliceStr(envalue, [])

const devalue = encryptArr.map(ch => {
    return RvalsMap.get(ch)
}).join('')

console.log(devalue)