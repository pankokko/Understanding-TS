type Admin = {
  name:string;
  privileges: string[];
}

type Employee = {
   name: string;
   startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "max",
  startDate: new Date(),
  privileges: ["create-server"]
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Numeric & Combinable;
const a: Universal = 100
console.log(a)

type UnknownEmployee = Admin & Employee;

function printEmployeeInfo(emp: UnknownEmployee){
  if('privileges' in emp){
    console.log("privileges:" + emp.privileges)
  } 
  if('startDate' in emp){
    console.log("start Date:" + emp.startDate)
  }

}

interface Bird {
  type:"bird",
  flyingSpeed: number;
}

interface Horse {
  type:"horse",
  runningSpeed: number;
}

type Animal1 = Bird | Horse;

function moveAnimal2(animal: Bird | Horse) {
  if ("flyingSpeed" in animal) {
    console.log(animal.flyingSpeed); 
  } else if ("runningSpeed" in animal) {
    console.log(animal.runningSpeed);
  }
}

function moveAnimal(animal: Bird | Horse){
  let speed;
  switch(animal.type){
    case "bird":
    speed = animal.flyingSpeed;
    break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("移動速度:" + speed)
}

moveAnimal({type: "bird", flyingSpeed:300})

const input1 = <HTMLInputElement>document.getElementById("user-input")!
const input2 = document.getElementById("user-input")! as HTMLInputElement
const input3 = document.getElementById("user-input");


if(input3){
  (input3 as HTMLInputElement).value = "こんばんは"
}

input1.value = "こんにちは"

interface ErrorContainer {
  [prop: string]: string
}

const errorBag: ErrorContainer = {
    email: "aaaa",
    userName: "aaa",
}

function addStNum(a: string, b: string): string; //ここで引数が○○の条件の時の関数の返す型を定義
function addStNum(a: Combinable, b: Combinable){
  if(typeof a === "string" || typeof b === "string"){
    return a.toString() + b.toString()
  } 
  
  return a + b;
  
}

const re = addStNum("text", "test");
re.split(' ')

