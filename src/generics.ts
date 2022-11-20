const names:[] = [];
const names2: Array<string> = [];


names2[0].toLowerCase



const promiseFunc = new Promise<string>((resolve, reject) => {

  setTimeout(()=>{
    resolve("hello");
  }, 2000)
})

promiseFunc.then(data =>{
  data.toLowerCase
})

function merge1(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

//TとUを指定する事により、ただのオブジェクトではないことをtypeScriptに伝えている。
function merge2<T extends object, U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB);
}

const mergedObj1 = merge1({name: "max"}, {age: 30})
const mergedObj2 = merge2({name: "max"}, {age: 30})
// const mergedObj3 = merge2("aaaa", {age: 30})

// mergedObj1.age
console.log(mergedObj2.age)

function test(value: any){
  return value
}
console.log(test(100))
console.log(test("aiueo"))


interface Lengthy {
  length: number;
}

//generic型がtだからといって引数の型もtにする必要はない
//そういうパターンが多いだけ
///引数に渡した値がlenghtプロパティを持っているかどうか確認している。
function countAndDescribe<T extends Lengthy>(element: T){
  let descriptionText = "値がありません"
  if(element.length > 0){
    descriptionText = "値は" + element.length + "個です。";
  }
  
  return [element, descriptionText];
}

console.log(countAndDescribe("aiueo"))

function accessObj<T extends object, U extends keyof T>(obj: T, key: U){
  return obj[key]
}

accessObj({name: "taro", height: 180},"height") 


class DataStorage<T>{
  private data: T[] = [];

  addItem(item: T){
    this.data.push(item);
  }

  removeItem(item: T){
    this.data.splice(this.data.indexOf(item),1);
  }
  
  getItems(){
    return [...this.data];
  }
}

//<T>にStringを指定。new時に指定した型(string)がメソッドの引数<T>の型にも適用される。
const strStrage = new DataStorage<string>(); 

strStrage.addItem("book") //<T>でstringを指定したため許可されている

//<T>にnumberを指定。new時に指定した型(number)がメソッドの<T>の型にも適用される。
const numberStrage = new DataStorage<number>();

numberStrage.addItem(1111); //<T>でnumberを指定したため許可されている


function createData(title: string, description: string, date: string){
    let couseData: any = {}; 
    couseData.title = title;
    couseData.description = description;
    couseData.completeDate = date           
    return couseData;
}

console.log(createData("aaa", "iii","2022-12-12"))

const nameList: Readonly<string[]> = ["Max", "Tanaka"];
