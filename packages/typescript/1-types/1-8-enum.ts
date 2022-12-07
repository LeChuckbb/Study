{
  /**
   * Enum (상수 정의하기) 💩 (타입이 보장되지 않는다)
   */

  // JS
  const MAX_NUM = 6;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESAY: 2 });

  // TS 💩
  enum Days {
    Monday, // 0
    Tuesday, // 1
    Wednesday, // 2..
    Thursday,
    Friday,
    Sataruday,
    Sunday,
  }
  let day: Days = Days.Monday;
  day = Days.Tuesday;
  day = 10; // Days enum 이외 값인 10으로 할당했는데도 아무런 에러가 발생하지 않았다.

  // Enum -> Union으로 대체하기
  type Days2 = "Monday" | "Tuesday" | "Wednesday";
  let day2: Days2 = "Monday";
}
