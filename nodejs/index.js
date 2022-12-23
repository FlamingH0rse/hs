const fs = require('fs')
let { parse } = require('./interp/parser.js')
fs.readFile(process.argv[2], (err, data) => {
    if (err) throw err
    else {
        data = data.toString()
        parse(data)
    } // interp then
})