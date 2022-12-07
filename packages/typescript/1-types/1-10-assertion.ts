{
  /**
   * Type Assertions 💩
   * 타입을 확신할 수 있을 때
   */
  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);
}
