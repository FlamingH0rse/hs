let str = "$ hi $/\n$ bye $"
let strs = str.split('/')

let codeblocks = []
for (let line in strs) {
    codeblocks[line] = strs[line].substring(
        strs[line].indexOf("$") + 1, 
        strs[line].lastIndexOf("$")
    ).trim()
}
console.log(codeblocks)