// this = Window
console.log(this);

function simpleFunc() {
  console.log(this);
}
// simpleFunc() 는 window.simpleFunc()와 동일하다.
simpleFunc();

class Counter {
  count = 0;
  // function 키워드 : 일일이 .bind()해줘야 함
  increase = function () {
    console.log(this);
  };
  // Arrow function : 자동 .bind()
  increase = () => {
    console.log(this);
  };
}
// Counter 클래스 내부에서 this를 호출했으므로,
// this = Counter
const counter = new Counter();
counter.increase();
// let, const로 선언한 변수는 window에 할당되지 않는다. (var는 window에 할당된다)
// 또한 counter와 같은 Object에 속하지도 않는다.
// 따라서 this = undefined
const caller = counter.increase;
caller(); // this = undefined
const bindedCaller = counter.increase.bind(counter);
bindedCaller(); // this = Counter
var globalCaller = counter.increase;
window.globalCaller(); // window

// this = Bob
class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
