const button = document.querySelector("button")!

// a comment
button.addEventListener("click",  () => {
  console.log('clicked')
  console.log('aiueo')
})



const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["hikking"];

activeHobbies.push(...hobbies)


const addNum = (...args: [number, number, number]) => {
    
  return  args.reduce((curResult,cuValue) => {
        return curResult + cuValue
    },0)
}

const addedNUmbers = addNum(5,10,2)
console.log(addedNUmbers)