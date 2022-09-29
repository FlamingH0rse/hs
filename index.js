let str = "$[createvar] h]//i $/\n$[createvar] bye $"
let strs = str.split('$/')

strs.forEach((s, i) => strs[i] = i==strs.length-1?strs[i]:strs[i] + "$")

const validBlockTypes = ['createvar','editval', 'root']
let codeblocks = []

for (let line in strs) {
    let blocktxt = strs[line].substring(
        strs[line].indexOf("$") + 1, 
        strs[line].lastIndexOf("$")
    )
    
    let blocktype = blocktxt.substring(
        blocktxt.indexOf("[") + 1,
        blocktxt.indexOf("]")
    )
    
    if (!validBlockTypes.includes(blocktype)) return console.error('noob')//console.error
    let code = {
      str: blocktxt.replace(/\[.*?\]/, '').trim(),
      type: blocktype
    }
    codeblocks.push(code)
}
console.log(codeblocks)