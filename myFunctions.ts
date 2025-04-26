function addTwo (num: number){

    return num + 2
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

export {}