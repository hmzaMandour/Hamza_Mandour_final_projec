class Account {
    constructor(fullName , age , email , password){
        this.fullName = fullName
        this.age = age
        this.email = email
        this.password = password
    }
}
let data = []

const choose =()=>{

    let x = prompt("1  (signing up)  , 2   (logging in)  , or    3   (changing the password)")
    if (x == "1" ) {
        let fullName = prompt("enter your Full Name please")
        while (!validFullName(fullName)) {
            fullName = prompt("enter your Full Name please")
        }
        fullName = validFullName(fullName)


        let age = parseInt(prompt("enter your Age please"))
        let email = prompt("enter your email please")
        let password = prompt("enter your password please")
        const user = new Account(fullName ,age , email , password , [] )
        console.log(user)
        data.push(user)
        console.log(data);
    }
    if (x == "2") {
        let email = prompt("enter your valide email")
        let password = prompt("enter your valide password")
    }
    if (x == "3") {
        let email = prompt("enter your email now")
    }
}

function validFullName(fullName) {
    let removespaces = fullName.trim()
    let changingCha = removespaces.split(" ") 
    let c  = ""
    for (let i = 0; i < changingCha.length; i++) {
        changingCha[i] = changingCha[i][0].toUpperCase() + changingCha[i].slice(1).toLowerCase() 
        c += changingCha[i] + " "
    }
    let namelenght = c.split(" ").join("").length
 
    if (namelenght < 5) {
        alert("smya sghira 3awd dakhalha")
        return false 
    }
    const regex = /[^A-Za-z ]/;
    if (regex.test(fullName)) {
        alert("smya fiha caractair")
        return false 
    }
    if (/\d/.test(fullName)) {
        alert("smya fiha ra9em")
        return false    
     }

    return c.trim()
}


choose()














