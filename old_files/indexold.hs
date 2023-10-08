$[createvar] object : name-flame,age-17 < {}$/
$[createvar] name : Flaming < ""$/
$[root] -> >name<$/
$[createvar] myfunc : 
    $[root] -> >object<$\ 
    $[editval] name ; Chronny < ""$\
    $[root] -> >name<$\
< (=>) $/
$[root] => myfunc$/
