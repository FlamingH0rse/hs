let s = "my cow gives ass milk"
var result = s.match(/(?<=cow\s+).*?(?=\s+milk)/gs);

console.log(result)