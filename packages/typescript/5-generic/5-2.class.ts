{
  // either: a or b
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}

    left(): L {
      return this.leftValue;
    }
    right(): R {
      return this.rightValue;
    }
  }

  const either = new SimpleEither(3, 4);
  either.left(); // 3
  either.right(); // 4
  const best = new SimpleEither({ name: "ellie" }, "hello");
}
