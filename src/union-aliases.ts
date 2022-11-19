function combine(v1: number | string, v2: number | string){
  let result
  if(typeof v1 === "number" && typeof v2 === "number") {
     result = v1 + v2;
  } 

  return result
}

combine("aaa", "kkk")


type ApplicantNames = "taro" | "jiro"

function recieveStr(literal: ApplicantNames){
  return literal === 'taro' ?? false
}
recieveStr("taro")

type User = { name: string, age: number}
const u1: User = {name:"Max", age:29}

function userProfile(user:User){
  console.log(user.name)
  console.log(user.age)
}

userProfile({name: "taro", age: 100})





