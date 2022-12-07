{
  /**
   * Stack (LIFO)
   * String
   * push() pop()
   * Arary, Array.push()와 같은 내장 API 사용 불가.
   * 단일 연결 리스트 Head
   * 1 - 2 (Head)
   * Pop()
   * 1 (Head)
   */

  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
    // next: StackNode | undefined;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;

    get size() {
      return this._size;
    }
    push(value: string) {
      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): string {
      // null == undefined, null !== undefined
      // null과 undefined인 경우 error
      if (this.head == null) {
        throw new Error("Stack is empty");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }
  const stack = new StackImpl();
  stack.push("Ellie 1");
  stack.push("Bob 2");
  stack.push("Steve 3");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
