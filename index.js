let str = "$[createvar] name : flaming < \"\"$/\n$[createvar] age : bozo < \"\" $"
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
        str: blocktxt.replace(/\[.*?\]/, '').trim() + ';',
        type: blocktype
    }
    codeblocks.push(code)
}
console.log(codeblocks)

//prolly will go in another file
let memory = {}

for (let block in codeblocks){
    let blocktxt = codeblocks[block].str
    if (codeblocks[block].type = 'createvar') {
        const validDataTypesSym  = ['\"\"', '09', '01', '[]', '{}', '(=>)']
        const validDataTypesStr = ['string', 'number', 'boolean', 'array', 'object', 'function']
        
        
        const validDataTypes = new Map()
        validDataTypesSym.forEach((sym, i) => validDataTypes.set(sym, validDataTypesStr[i]))
        
        let datatypeSym = blocktxt.substring(
            blocktxt.lastIndexOf("<") + 1,
            blocktxt.lastIndexOf(";")
        ).trim()
        if (!validDataTypesSym.includes(datatypeSym)) return console.error('wrong datatype lol')
        let decl = blocktxt.replace(/\<.*\;/, '').trim()
        
        let varName = decl.split(':')[0].trim()
        let value = decl.split(':')[1].trim()
        
        let datatype = validDataTypes.get(datatypeSym)
        
        if (datatype == 'string') value = value.toString()
        if (datatype == 'number') value = Number(value)
        if (datatype == 'boolean') {
            if (value == '0' || value == 'false') value = false
            if (value == '1' || value == 'true') value = true
            else console.error('datatype error')
        }
        if (datatype == 'array') value = value.split(',')
        if (datatype == 'object') {
            let obj = {}
            value.split(',').forEach(e => {
                if(e.includes('-')) {
                    let key = e.split('-')[0]
                    let val = e.split('-')[1]
                    obj[key] = val
                }
            })
            value = obj
        }
        memory[varName] = value
    }
}
console.log(memory)
