interface Greetable {
  name: string;
  greet(phrase: string): void;
}

interface Animal {
  type?: string;
  eat(): void;
}

class Zoo implements Greetable, Animal {
    name: string;
    age: number;
    type?: string;
    constructor(n: string, a: number = 10){
      this.name = n;
      this.age = a;
    }
    greet(pharase: string ):void {
      console.log(pharase)
    }
    eat(): void {
      console.log("むしゃむしゃ")
    }
}



let u2: Greetable
u2 = new Zoo('max', 20)

u2.greet("wooooo")



class Anime {
  title?:string

  constructor(title?: string){
    this.title = title
  }

  printTitle(){
    console.log(this.title) 
  }

}
const anime = new Anime();
anime.printTitle()
const anime2 = new Anime("tiger mask");
anime2.printTitle()