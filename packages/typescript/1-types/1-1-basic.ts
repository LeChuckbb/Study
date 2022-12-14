{
  /**
   * JavaScript
   * Primitive(μμ) : number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array...
   */

  // number
  const num: number = -3;

  // string
  const str: string = "321";
  
  // boolean
  const bool: boolean = true;
  
  // undefined
  let name: undefined; // π© (undefined μ΄μΈμ κ°μ ν λΉν  μ μλ, μΈλͺ¨μλ λ³μ)
  let age: number | undefined; // O
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null (λͺμμ  νν)
  let person: null; // π©
  let person2: string | null; // O (| null λ³΄λ€λ | undefinedλ₯Ό λ§μ΄ μ΄λ€. λ³μμ κ°μ΄ μ΄κΈ°νλμ§ μμ κ²½μ°..)

  // unknown π© JS νΈλμ€νμΌμ©
  let notSure: unknown = 0;
  notSure = "hi";
  notSure = true;

  // any π©
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    // μλ¬΄κ²λ return νμ§ μμΌλ©΄ void
  }
  let unusable: void = undefined; // π© undefindeλ§ ν λΉμ΄ κ°λ₯. μ¬μ© X

  // never μ λλ‘ return ν  μ μμμ μλ―Έ.
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }

  // object π©
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
  acceptSomeObject([1, 4]);
}
