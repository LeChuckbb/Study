{
  // function checkNotNullBad(arg: number | null): number {
  //   if (arg == null) {
  //     throw new Error("not valid number!");
  //   }
  //   return arg;
  // }

  // const result = checkNotNullBad(123);
  // console.log(result);
  // checkNotNullBad(null);

  // 제네릭 -> 코드 작성자가 작성 시점에 타입을 결정

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const number = checkNotNull(123);
  const bool = checkNotNull(true);
}
