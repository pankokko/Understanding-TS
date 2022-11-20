function Logger(logStr: string){
  return function(constructor: Function){
    console.log(logStr);
    console.log(constructor);
  }

}

function WithTemplate(template: string, hookId: string){
  return function(_: Function){
    const hookEl = document.getElementById(hookId);
      if(hookEl){
        hookEl.innerHTML = template;
      }
  }
}

// @Logger("ログ出力中 --- Person")
@WithTemplate("<h1>Person</h1>", "app")
class Person {

  name = "Max";

  constructor(){
    console.log("Personオブジェクト作成中");
  }


}

const p1 = new Person();


