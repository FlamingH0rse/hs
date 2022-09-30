let str = "$[createvar] name : flaming < \"\"$/\n$[createvar] age : 17 < 09$/\n$[root] => my name: >name<\nmy age: >age< $"
let strs = str.split('$/')

function breakCode (strs) {
    strs.forEach((s, i) => strs[i] = i==strs.length-1?strs[i]:strs[i] + "$")

    const validBlockTypes = ['createvar','editval','loop', 'root']
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
return codeblocks
}

//prolly will go in another file
let memory = {}
memory.variables = {}

interp(breakCode(strs))

function interp (codeblocks) {
    
for (let block in codeblocks){
    let blocktxt = codeblocks[block].str
        
    let datatypeSym = blocktxt.substring(
        blocktxt.lastIndexOf("<") + 1,
        blocktxt.lastIndexOf(";")
    ).trim()
    let decl = blocktxt.slice(0, blocktxt.lastIndexOf('<'))
    
    if (codeblocks[block].type == 'createvar') {
        if (!decl.includes(':')) return console.error('syntax error')
        let declPos = decl.lastIndexOf(':')
        
        let varName = decl.slice(0, declPos).trim()
        let value = decl.slice(declPos+1).trim()
        value = dataParse(value, datatypeSym)
        
        memory.variables[varName] = value
    }
    else if (codeblocks[block].type == 'editval') {
        if (!decl.includes(';')) return console.error('syntax error')
        let declPos = decl.lastIndexOf(';')
        
        let varName = decl.slice(0, declPos).trim()
        let value = decl.slice(declPos+1).trim()
        value = dataParse(value, datatypeSym)
        
        varPath = varName.split('->').map(e => { return e.trim() })
        
        pathIndex(memory.variables, varPath, value)
    } else if (codeblocks[block].type == 'loop') {
        let validLoopSym = ['#', '@']
    } else if (codeblocks[block].type == 'root') {
        if (blocktxt.startsWith('=>')) {
            let rawVal = blocktxt.slice(2, -1).trim()
            let logVal = dataParse(rawVal, `""`)
            console.log(logVal)
        }
    }
}
}
console.log(memory)

function dataParse (value, sym) {
    const validDataTypesSym  = ['\"\"', '09', '01', '[]', '{}', '(=>)']
    const validDataTypesStr = ['string', 'number', 'boolean', 'array', 'object', 'function']
    
    const validDataTypes = new Map()
        validDataTypesSym.forEach((sym, i) => validDataTypes.set(sym, validDataTypesStr[i]))
        
    let datatype = validDataTypes.get(sym)
    if (!validDataTypesSym.includes(sym)) return console.error('invalid datatype')
    
    if (value.includes('>') && value.includes('<')) {
        let varName = value.substring(
            value.indexOf(">") + 1,
            value.indexOf("<")
        ).trim()
        
        if (memory.variables[varName] == undefined) return console.error(`${varName} is undefined`)
        
        let newVal = value.replace(/\>.*?\</, memory.variables[varName])
        
        return dataParse(newVal, sym)
    }
    let parse
    if (datatype == 'string') parse = value.toString()
    if (datatype == 'number') {
        parse = Number(value)
    if (isNaN(parse)) return console.error('datatype error')
        }
    if (datatype == 'boolean') {
        if (value == '0' || value == 'false') parse = false
        if (value == '1' || value == 'true') parse = true
        else console.error('datatype error')
        }
        if (datatype == 'array') parse = value.split(',')
        if (datatype == 'object') {
            let obj = {}
            value.split(',').forEach(e => {
                if(e.includes('-')) {
                    let key = e.split('-')[0]
                    let val = e.split('-')[1]
                    obj[key] = val
            }
        })
        parse = obj
    }
    return parse
}

function pathIndex (obj,is, value) {
    if (is.length==0) return
    if (obj[is[0]] !== undefined) pathIndex(obj[is[0]],is.slice(1), value);
    else return console.error(`${is[0]} is undefined property`)
    if (is.length==1) return obj[is[0]] = value;
}