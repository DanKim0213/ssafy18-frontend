
// b변수가 선언되고 쓰인다; index.ts 의 변수 b를 간섭하지 않는다 :)
const b = 18;
function sayHi() {
  console.log(b);
}

function sayHiToSomeone(person: string):void {
  console.log(`Good to seeya!, ${person}`);
}

export { sayHiToSomeone };
export default sayHi;