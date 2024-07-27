class Account {
    constructor(fullName , age , email , password){
        this.fullName = fullName
        this.age = age
        this.email = email
        this.password = password
    }
}
const user2 = new Account("samir ayoub" ,22 , "samir@gmail" , "password"  )

let data = [user2]

const choose =()=>{

    let x = prompt("1  (signing up)  , 2   (logging in)  , or    3   (changing the password) , 4   (exit)")
    if (x == "1" ) {
        let fullName = prompt("enter your Full Name please")
        while (!validFullName(fullName)) {
            fullName = prompt("enter your Full Name please")
        }
        fullName = validFullName(fullName)


        let age = prompt("enter your Age please")
        while (!validAge(age)) {
            age =prompt("enter a valid age")
        }
        age = validAge(age)



        let email = prompt("enter your email please")
        while (!validEmail(email)) {
            email = prompt("enter your email correctly")   
        }
        email =  validEmail(email)

       
        let password = prompt("enter your password please")
        while (!validPassword(password )) {
            password = prompt("enter valid password")
        }
        let confirmedPassword = prompt("confirmed yout password")
        let i = 0
        while (password !== confirmedPassword && i < 3) {
            alert("please enter a valid confirmation")  
            confirmedPassword = prompt("enter a valid confirmation please") 
            i++
            if (i==3) {
                alert("you are blocked")
                return
            }
        }
        password = validPassword(confirmedPassword)


        const user = new Account(fullName ,age , email , password , [] )
        console.log(user)
        data.push(user)
        console.log(data);
    }
    if (x == "2") {
        let email = prompt("enter your valide email")
        // let password = prompt("enter your valide password")
        email = loginEmail(email )

        // password = loginPassword(password)

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
        return  
    }
    const regex = /[^A-Za-z ]/;
    if (regex.test(fullName)) {
        alert("smya fiha caractair")
        return  
    }
    if (/\d/.test(fullName)) {
        alert("smya fiha ra9em")
        return     
     }

    return c.trim()
}

function validEmail(email) {
    let checkspaces = email.trim()
  
    if (email.includes(" ")) {
        alert("don't use spaces between words")
        return 
    }
    if (email.length <= 10) {
        alert("your email is too short try again")
        return 
    }
    let emailRegex = /^[^@]+@[^@]+$/
    if (! emailRegex.test(email)) {
        alert("you put more than one of (@)")
        return
    }
    let exist = data.find(e=> e.email == email)
    if (exist) {
        alert("email already here")
        return
    }

    return checkspaces.toLowerCase()
  
}


function validAge (age){
    let checkage = age.trim()
    if (checkage !== age || age.includes(" ")) {
        alert("fih spaces ")
        return 
    }
    if (checkage < 0 || checkage > 100) {
        alert("your too old ")
        return
    }

    return Number(checkage)
}
 function validPassword (password ){
    let checkpass = password.trim()
    if (checkpass !== password || password.includes(" ")) {
        alert("password have space at the beginning or end")
        return
    }
    let cara = /[#@\-+\*/]/
    if (!cara.test(checkpass)) {
        alert("your password  must contain at least one special character")
        return
    }
    if (password.length < 7) {
        alert("your password must have at least 7 characters long")
        return
    }
  
    return checkpass
 }

 function loginEmail (email ){
    let findEmail = data.find(e => e.email == email)
    if (findEmail) {
        alert("email is already here")
        let password = prompt("enter your valide password")
        if (findEmail.password == password) {
            alert( `welcome back mr ${findEmail.fullName}`)
        }else{
            alert("this password not linked with this email")
            return
        }
    }else{
        alert("we don't have this email")
        return
    }
 }


choose()
choose()


