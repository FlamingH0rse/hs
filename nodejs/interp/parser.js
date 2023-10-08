module.exports = {
    parse: (rawCode) => {
        let lines = rawCode.split('\r\n')
        let parsedJson = {}
        lines.forEach((line, index) => {
            let comments = line.match(/\|\>(.*)\<\|/g)
            if (comments) line = line.replace(comments[0], '')

            let [target, ...code] = line.split('=')
            target = target.trim(); code = code.join('=').trim();
            if (target) parsedJson[index] = { target, code } 

        });
        console.log(parsedJson)
    }
}