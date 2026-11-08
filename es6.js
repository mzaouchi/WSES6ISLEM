function Hello(){
  {
    var a = 7
    console.log(a)
  }
  console.log(a)  
  return "Hello ES6"
}

console.log(Hello())

function Hello(){
  {
     let b = 8
     console.log(b)
  }
  console.log(b)
  return "Hello ES6"
}

console.log(Hello())

function Hello(){
  {
     const c = 5
     console.log(c)
  }
  console.log(c)
  return "Hello ES6"
}

console.log(Hello())


var a = 5
a = 9
console.log(a)


let off = 9

off = 10

console.log(off)

const pi = 3.14

pi = 10

const name = "Islem"

name = "OOO"


const t = [2,3,8,0,66]

t.push(100)

console.log(t)
t[1] = 10000

console.log(t)

t = []

const user = {name : "Islem", age : 3, city : "Sidi Daoued"}

user.age = 99

console.log(user)

user.track = "FS JS"

console.log(user)

user = {}

// function Somme(a, b){
//   var sum = a + b
//   return sum
// }

// console.log(Somme(5,3))

// var Somme=(a,b)=>{
//   let sum = a + b
//   return sum
// }

// console.log(Somme(5,3))

// var Somme  =(a, b)=> a + b

// console.log(Somme(3,5))


// let sayHello=()=> "Hello Louay !!!"


// console.log(sayHello())

// const sayHello=(name)=> "Hello \n" + name

// console.log(sayHello('Mahmoud'))


const sayHello=name=> "Hello "+ name  

console.log(sayHello("Ahmed"))



var name = "Islem"

// console.log("Hello my name is :\n" + name)

console.log(`Hello my names is : ${name} and my age is ${7 + 3}`)


// var age = 300

// if(age < 18){
//   console.log('Mineur')
// }else if(age < 60){
//   console.log('Adulte')
// }else{
//   console.log("Vieux")
// }

// age < 18 ? console.log('Mineur') : age < 60 ? console.log('Adulte') : console.log("Vieux")

// console.log(age < 18 ? "Mineur" : age < 60 ? "Adulte" : "Vieux")


// const guessMyTiHassilo=(age)=> age < 18 ? "Mineur" : age < 60 ? "Adulte" : "Vieux"

// console.log(guessMyTiHassilo(4))
// console.log(guessMyTiHassilo(40))
// console.log(guessMyTiHassilo(400))


var num = 600

num > 0 && console.log("Positif")

var user = {
  name : "Islem",
  age : 2,
  city : {
    street : "Bengladesh",
    cp : 1350
  }
}

var {name, age, city} = user
var {street} = city
console.log(name)
console.log(age)
console.log(street)



// console.log(user.name)
// console.log(user.city.street)

var t = [2,3,54,999]


var [mahmoud, djeja] = t

console.log(mahmoud)
console.log(djeja)



var t = [2,4,7]

var d = [8,33,22,55]
var a = [...t , ...d]

console.log([77,...a, 6,999])
// console.log(a)
// console.log(a[3])

// console.log(Math.min(3,2,1,444,-22,1000))


// let a = [t + d]
// console.log([Math.min(...t), Math.max(...t)])
// console.log(a.length)

// for(var i = 0; i < t.length; i++){
//   a.push(t[i])
// }

// for(var i = 0; i <d.length;i++){
//   a.push(d[i])
// }

// console.log(a)


var user = {
  name : "Islem",
  age : 2,
  city : {
    street : "Bengladesh",
    cp : 1350
  }
}

console.log({...user, track : "FS", name : "Ahmed"})

var inputT = [3,2,43,8]
// var d = inputT.map((el,i,t)=>  el + 5)
// console.log(d)

// console.log(inputT)

console.log(inputT.map((mahmoud, louay, ahmed)=> mahmoud + 5))

var inputT = [3,2,43,8]

inputT.forEach((el,i,t)=> console.log(el))


console.log(inputT)

var inputT = [3,2,43,8]

console.log(inputT.filter((el,i,t)=> el% 2 == 0))

var inputT = [3,2,43,8]

var guessCheck=(arr, num)=> arr.find((el,i,t)=> el == num) == undefined ? "Mahouch mawjoud" : "Mawjoud"

console.log(guessCheck(inputT,8))
console.log(guessCheck(inputT,437))
console.log(guessCheck([3,9,88,66],66))

var inputT = [3,2,43,8]

console.log(inputT.findIndex((el,i,t)=> el == 93))

var inputT = [3,2,43,8]

console.log(inputT.sort((a,b)=> b - a))


var inputT = [3,888,2,43,8]

console.log(inputT.splice(1,2))

console.log(inputT)


// var str = "Bonjour la vie bon weekend monsieur bouhmid"

// // console.log(str.split(" ").length)


var tab = ["I", "Love", "GOMYCODE"]

console.log(tab.join(" "))


app.use(cors({
  origin: process.env.corss_origin,
  credentials: true 
}))

