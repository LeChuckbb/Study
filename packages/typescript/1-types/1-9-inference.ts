{
  // text 변수를 선언과 동시에 'hello'라는 문자열로 초기화했기 때문에, text 변수는 string type으로 추론되었다.
  // string으로 추론되었기 때문에 number로 변경시 에러.
  let text = "hello";
  text = 1;
}
