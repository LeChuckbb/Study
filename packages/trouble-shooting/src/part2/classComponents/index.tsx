import React from "react";

type Props = {
  name: string;
};

type State = {
  name: String;
};

class Greeting extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "Students!",
    };
  }

  changeNameAndNotifyCurrentStateOfName = () => {
    this.setState({ name: "Students and Friends!" });
    setTimeout(() => alert(this.state.name), 3000);
  };

  render() {
    console.log(this);
    const { name } = this.state;
    const changeNameAndNotifyCurrentlyRenderedName = () => {
      this.setState({ name: "Students and Friends!" });
      setTimeout(() => alert(name), 3000);
    };

    return (
      <>
        <h1>Hello, {this.state.name}</h1>
        <button onClick={this.changeNameAndNotifyCurrentStateOfName}>
          Change name to "Students and friends!" and print updated name
        </button>
        <button onClick={changeNameAndNotifyCurrentlyRenderedName}>
          Change name to "Students and friends!" and print rendered name
        </button>
      </>
    );
  }
}

export default Greeting;
