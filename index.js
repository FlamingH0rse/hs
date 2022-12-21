let str = `
ROOT.MEMORY.CREATE= name[]:"Beaner"
`

function parse(rawCode, params) {
    let chunks = rawCode.split('|')
    for (i in chunks) {
        interp(chunks[i], params)
    }
}

function interp (code, params) {
    let [target, ...exec] = code.split('=')
    exec = exec.join('=')
    console.log(target, exec)
}
// nigger??? afk?

// i think ur not reinstalling the msvc :pensive:
// maybe see??

//yes also d
// slow af cpus be like :pensive:

// men 
parse(str)