{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected -> 외부에서 접근 불가. 단, 해당 클래스를 상속한 다를 클래스에서는 접근이 가능
  class CoffeeMachine {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instacne (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT)
        throw new Error("Not enought coffee beans!");

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMachine.makeMachine(21);
  maker.fillCoffeeBeans(21);
  const coffee = maker.makeCoffee(2);
  console.log(coffee);

  // GETTER / SETTER
  class User {
    private internalAge = 4;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user = new User("steve", "jobs");
  user.age = 6;
  console.log(user.age);
  console.log(user.fullName);
}
