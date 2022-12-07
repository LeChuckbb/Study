{
  /**
   * JavaScript
   * Primitive(원시) : number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array...
   */

  // number
  const num: number = -3;

  // string
  const str: string = "321";
  
  // boolean
  const bool: boolean = true;
  
  // undefined
  let name: undefined; // 💩 (undefined 이외의 값을 할당할 수 없는, 쓸모없는 변수)
  let age: number | undefined; // O
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null (명시적 표현)
  let person: null; // 💩
  let person2: string | null; // O (| null 보다는 | undefined를 많이 쓴다. 변수에 값이 초기화되지 않은 경우..)

  // unknown 💩 JS 트랜스파일용
  let notSure: unknown = 0;
  notSure = "hi";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    // 아무것도 return 하지 않으면 void
  }
  let unusable: void = undefined; // 💩 undefinde만 할당이 가능. 사용 X

  // never 절대로 return 할 수 없음을 의미.
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }

  // object 💩
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
  acceptSomeObject([1, 4]);
}
