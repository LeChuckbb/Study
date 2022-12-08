// Module2
// Module1에서 default로 선언된 add를 run으로 이름만 변경해서 사용
import run, { print as otherName } from "./10-3-module1.js";
console.log(run(1, 2));
otherName();
