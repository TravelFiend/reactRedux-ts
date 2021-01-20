import React, { Component } from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

interface AppState {
  counter: number;
}

//// how a functional component should look with TS
// const App = (props: AppProps): JSX.Element => {

//   return (
//     <h1>{props.color}</h1>
//   )
// }

class App extends Component<AppProps, AppState> {
  // this will work without the "AppState" in the generic, without constructor, and without the "AppState" interface
  // because it overrides the inherited component state
  //// state = { counter: 0 };

  constructor(props: AppProps) {
    super(props);

    this.state = { counter: 0 };
  }

  onIncrement = (): void => this.setState({ counter: this.state.counter + 1 });
  onDecrement = (): void => this.setState({ counter: this.state.counter - 1 });

  render() {
    return (
      <div>
        <button onClick={() => this.setState(this.onIncrement)}>Increment</button>
        <button onClick={() => this.setState(this.onDecrement)}>Decrement</button>
        {this.state.counter}
      </div>
    )
  }
}

ReactDOM.render(<App color='green' />, document.getElementById('root'));
