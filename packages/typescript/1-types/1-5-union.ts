{
  /**
   * Union Types = OR
   * 활용도가 매우 높음
   */
  type Direction = "left" | "right" | "up" | "down";
  function move2(direction: Direction) {
    console.log(direction);
  }
  move2("right");

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function printLoginState3(state: LoginState) {
    // response 라는 key가 state 안에 존재한다면
    if ("response" in state) {
      console.log("success");
    } else {
      console.log("fail");
    }
  }
}
