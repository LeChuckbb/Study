{
  // Array
  // number[]와 Array<number> 두 가지 방법중 전자가 통일성에 좋다.
  // readonly라는 속성을 붙일 때 Array<number>와 같은 형식은 지원하지 않기 때문이다.
  // 그리고 readonly는 꽤 자주 쓰인다.
  const scores: number[] = [1, 2, 3];
  const scores2: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly number[]) {}

  // Tuple 💩 -> interface, type alias, class로 대체하는 것이 좋음
  // Tuple은 하나의 배열안에 여러개의 타입이 공존할 수 있게 한 것.
  let student: [string, number];
  student = ['name', 123];
  // 아래처럼 [0], [1] 인덱스를 참조하는 방식은 가독성이 상당히 떨어진다.
  // 정의된 곳이나 출력문을 살펴봐야만 그 값을 알 수 있기 떄문이다.
  // Object로 변환하여 student.name과 같은 형식을 차용하는 게 좋다.
  student[0] // name
  student[1] // 123
}
