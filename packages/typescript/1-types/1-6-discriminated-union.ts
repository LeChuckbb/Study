{
  // function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function printLoginState2(state: LoginState) {
    if (state.result === "success") {
      console.log("success");
    }
  }
}
