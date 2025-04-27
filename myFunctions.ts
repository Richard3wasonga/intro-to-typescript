function addTwo (num: number): number{

    return num + 2
    //return 'hello'
}

function getUpper(val: string){
    return val.toUpperCase
}
function signUpUser(name: string,email: string,isPaid: boolean){}

let loginUser = (name: string,email: string,isPaid: boolean = false) => {}

addTwo(5)
getUpper("row")
signUpUser("Row","row@dev.com",true)
loginUser("row", "row@dev.com")

//functions returning more than one data type
function getValue(myVal: number){
    if(myVal > 5){
        return true
    }
    return "200 ok"
}

const getHello = (s: string): string => {
    return ""
}

const heros = ["thoe", "spiderman", "ironman"]
//const heros = [1,2,3]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError (ereemsg: string): void{
    console.log(ereemsg)
    
}

function handleError (ereemsg: string): never{
    throw new Error(ereemsg)
    
}


export {}