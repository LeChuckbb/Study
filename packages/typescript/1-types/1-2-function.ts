{
  // JS 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TS
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JS 💩
  function jsFetchNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TS
  function fetchNum(id: number): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JS
  // 1.Optional parameter
  // lastName은 전달받을 수도, 전달받지 않을 수도 있다.
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("park", "jaewook");
  printName("park");

  // 2. Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();
  // 3. Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  addNumbers(1, 2, 3, 4, 5);
}
