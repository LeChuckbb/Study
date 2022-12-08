{
  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // string
  const text: Name = 123; // Error

  type Gender = Animal["gender"]; // 'male' | 'female;

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = "hi"; // Error
}
