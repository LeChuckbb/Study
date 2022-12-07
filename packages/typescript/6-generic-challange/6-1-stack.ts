{
  /**
   * Stack (LIFO)
   * push() pop()
   * Arary, Array.push()와 같은 내장 API 사용 불가.
   * 단일 연결 리스트 Head
   * 1 - 2 (Head)
   * Pop()
   * 1 (Head)
   */

  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
    // next: StackNode | undefined;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    get size() {
      return this._size;
    }
    push(value: T) {
      const node = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): T {
      if (this.head == null) {
        throw new Error("Stack is empty");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }
  const stack = new StackImpl<string>();
  stack.push("Ellie 1");
  stack.push("bob 2");
  stack.push("Steve 3");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>();
  stack2.push(1);
  stack2.push(2);
  stack2.push(3);
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
