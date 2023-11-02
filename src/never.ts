let uInput: unknown;
let uName: string;

uInput = 100;
function error(messsage: string, code: number): never {
  throw { messsage: messsage, erroCode: code };
}

const r = error("error occured", 522);
console.log(r);
