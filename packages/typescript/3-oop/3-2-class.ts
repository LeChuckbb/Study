{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    // Math.abs()에서 abs()도 static 키워드로 만들어진 것.
    // 즉, class level이어서 new 키워드로 instance를 생성한 후 사용할 필요가 없는것.
    static BEANS_GRAM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instacne (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans * CoffeeMachine.BEANS_GRAM_PER_SHOT;
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

  const maker = new CoffeeMachine(3);
  console.log(maker);
  const coffee = maker.makeCoffee(2);
  console.log(coffee);
}
