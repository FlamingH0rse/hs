let str = "$ hi $/\n$ bye $"
let strs = str.split('/')
const validBlockTypes = ['create', 'loop']
let codeblocks = []
for (let line in strs) {
    let blocktxt = strs[line].substring(
        strs[line].indexOf("$") + 1, 
        strs[line].lastIndexOf("$")
    ).trim()
    
    let blocktype = blocktxt.substring(
        blocktxt.indexOf("[t->") + 1,
        blocktxt.indexOf("]")
    ).trim()
    
    if (!validBlockTypes.includes(blocktype)) return //console.error
}
console.log(codeblocks)