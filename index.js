const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: '' })
console.log('Welcome to H0rseScript v1.0.')
console.log('Type "hs <file_name>" to run it.')
rl.on('line', input => {
    input = input.trim()
    if (input == 'exit') rl.close()
    if (!input.startsWith('hs')) return console.log(`-> ${input.split(' ')[0]} is not recognized as a command`)
    if (!input.split(' ')[1]) return console.log('That\'s me!')
    let inPath = input.split(' ')[1]
    if (inPath == '.') inPath = 'index'
    if (!inPath.endsWith('.h0s')) inPath += '.hs'
    if (!fs.existsSync(inPath)) return console.log(`->Cannot find the file ${inPath}`)
    let filepath = `./${inPath}`
    let codetxt = fs.readFileSync(filepath, 'utf-8')
    let strs = codetxt.split('$/')
    rl.close()
    console.log('\x1b[31m', '----------------Running your file----------------', '\x1b[0m')
    interp(breakCode(strs))
})

function breakCode(strs) {
    strs.forEach((s, i) => strs[i] = i == strs.length - 1 ? strs[i] : strs[i] + "$")
    if (strs[strs.length - 1] == '') strs.pop()
    const validBlockTypes = ['createvar', 'editval', 'loop', 'root']
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

        if (!validBlockTypes.includes(blocktype)) throw new Error('noob')//throw new Error
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

function interp(codeblocks) {
    for (let block in codeblocks) {
        let blocktxt = codeblocks[block].str

        let datatypeSym = blocktxt.substring(
            blocktxt.lastIndexOf("<") + 1,
            blocktxt.lastIndexOf(";")
        ).trim()
        let decl = blocktxt.slice(0, blocktxt.lastIndexOf('<'))

        if (codeblocks[block].type == 'createvar') {
            if (!decl.includes(':')) throw new Error('syntax error')
            let declPos = decl.indexOf(':')

            let varName = decl.slice(0, declPos).trim()
            let value = decl.slice(declPos + 1).trim()
            let [parseValue, type] = dataParse(value, datatypeSym)

            memory.variables[varName] = { value: parseValue, type: type }
        }
        else if (codeblocks[block].type == 'editval') {
            if (!decl.includes(';')) throw new Error('syntax error')
            let declPos = decl.indexOf(';')

            let varName = decl.slice(0, declPos).trim()
            let value = decl.slice(declPos + 1).trim()
            let [parseValue, type] = dataParse(value, datatypeSym)

            varPath = varName.split('->').map(e => { return e.trim() })
            //valuePath = value.split('->').map(e => { return e.trim() })

            pathIndex(memory.variables, varPath, [parseValue, type])
            //let loser = pathIndex(memory.variables, valuePath)
            //console.log(loser)
        } else if (codeblocks[block].type == 'loop') {
            let validLoopSym = ['#', '@']
        } else if (codeblocks[block].type == 'root') {
            let rawVal = blocktxt.slice(2, -1).trim()

            if (blocktxt.startsWith('->')) {
                let [parse] = dataParse(rawVal, `""`)
                console.log(parse)
            } else if (blocktxt.startsWith('=>')) {
                if (!(rawVal in memory.variables)) throw new Error(`${rawVal} is undefined`)
                if (memory.variables[rawVal].type != 'function') throw new Error(`${rawVal} is not a function`)

                interp(breakCode(memory.variables[rawVal].value.split('$\\')))
            }
        }
    }
    console.log(memory)
}

function dataParse(value, sym) {
    const validDataTypesSym = ['\"\"', '09', '01', '[]', '{}', '(=>)']
    const validDataTypesStr = ['string', 'number', 'boolean', 'array', 'object', 'function']

    const validDataTypes = new Map()
    validDataTypesSym.forEach((sym, i) => validDataTypes.set(sym, validDataTypesStr[i]))

    let datatype = validDataTypes.get(sym)
    if (!validDataTypesSym.includes(sym)) throw new Error('invalid datatype')

    if (value.includes('>') && value.includes('<')) {
        let varName = value.substring(
            value.indexOf(">") + 1,
            value.indexOf("<")
        ).trim()

        if (memory.variables[varName] == undefined) throw new Error(`${varName} is undefined`)

        let newVal = value.replace(/\>.*?\</, memory.variables[varName].value)

        return dataParse(newVal, sym)
    }
    let parse
    if (datatype == 'string') parse = value.toString()
    if (datatype == 'number') {
        parse = Number(value)
        if (isNaN(parse)) throw new Error('datatype error')
    }
    if (datatype == 'boolean') {
        if (value == '0' || value == 'false') parse = false
        if (value == '1' || value == 'true') parse = true
        else throw new Error('datatype error')
    }
    if (datatype == 'array') parse = value.split(',')
    if (datatype == 'object') {
        let obj = {}
        value.split(',').forEach(e => {
            if (e.includes('-')) {
                let key = e.split('-')[0]
                let val = e.split('-')[1]
                obj[key] = val
            }
        })
        parse = obj
    }
    if (datatype == 'function') parse = value
    return [parse, datatype]
}

function pathIndex(obj, is, value) {
    //console.log(obj)
    if (is.length == 0) return obj
    if (obj[is[0]] !== undefined || obj.value[is[0]] !== undefined) pathIndex(obj[is[0]] || obj.value[is[0]], is.slice(1), value);
    else throw new Error(`${is[0]} is undefined property`)
    if (is.length == 1 && value !== undefined) return obj[is[0]] = { value: value[0], type: value[1] };
}