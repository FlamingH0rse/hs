let ROOT = {
    MEMORY: {
        CREATE: () => {

        },
        DELETE: () => {

        }
    },
    TYPES: {
        INT: {
            SIZE: 0,

            TOSTRING: () => {

            },
            TOBIN: () => {

            },
        },
        STRING: {
            SIZE: 0,

            TOINT: () => {

            },
            TOARRAY: () => {

            },

            REPLACE: () => {

            },
            INDEX: () => {

            },

            SWITCHCASE: () => {

            },
            
        },
        ARRAY: {
            SIZE: () => {

            },
            COUNT: 0,
            // k i think this nigger is sucks
            SET: () => {

            },
            GET: () => {

            },
            TOSTRING: () => {

            }
        }
    },
    STD: {
        OUT: (str) => {
            console.log(str.toString())
        }
    }
}
//  sec brb <----

// idiot std????? how to have function inside int?

// ok i think my dementia is going brr AAAAAAAAAAAAAAAA
// yes
// but ok nvm0

/* 
ROOT
    MEMORY
        **PROPERTIES**
        MAXSIZE (Int)
        LIST (Array)

        **FUNCTIONS**
        CREATE
        DELETE
    DATATYPES
        INT
            **PROPERTIES**
            SIZE
            **FUNCTIONS**
            TOSTRING
            TOBINARY
        STRING
            **PROPERTIES**
            SIZE
            **FUNCTIONS**
            TOINT
            TOARRAY (basically like .split() in js)
            REPLACE
            INDEX (returns the index of a certain character)
            SWITCHCASE (turns AbCdEfGh to aBcDeFgH, switches the case of each character)
        ARRAY
            **PROPERTIES**
            SIZE
            COUNT (no. of items in the array)
            **FUNCTIONS**
            TOSTRING (basically like .join() in js) ???
            SET
            GET
            */