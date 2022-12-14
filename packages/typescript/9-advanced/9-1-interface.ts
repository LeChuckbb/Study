type PositionType = {
  x: number;
  y: number;
};
interface PositionInterface {
  x: number;
  y: number;
}

// Object
const obj1: PositionType = {
  x: 1,
  y: 1,
};
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// class
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends(상속, 확장)
type ZPositionType = PositionType & { z: number }; // 초기버전에서는 불가능했음
interface ZPositionInterface extends PositionInterface {
  z: number;
}

// only interfaces can be merged.
interface PositionInterface {
  // 기존에 정의된 것에 z를 추가
  z: number;
}

// only type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};
type Name = Person["name"]; // string
type NumberType = number;
type Direction = "left" | "right";
