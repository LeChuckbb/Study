{
  /**
   * Type Aliases : 새로운 커스텀 타입 정의
   * Text, Student라는 alias 만들어보기
   */
  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "ellie",
    age: 12,
  };

  // String Literal Types
  // Name Tyep에 'name'이 아닌 다른 값을 할당하면 에러 발생.
  type Name = "name";
  let ellieName: Name = "name";
}
