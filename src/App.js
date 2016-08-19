// eslint-disable-next-line
 /* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Higher order Components (replaces Mixins)

let Mixin = InnerComponent => class extends Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      val: 0
    }
  }
  update () {
    this.setState({val: this.state.val + 1})
  }
  componentWillMount () {
    console.log('Will mount');
  }
  render () {
    return (
      <InnerComponent update={this.update} {...this.state} {...this.props} />
    )
  }
  componentDidMount () {
    console.log('Did mount');
  }
}

const Button = (props) => <button onClick={props.update}>{props.txt} - {props.val} </button>
const Label = (props) => <button onMouseMove={props.update}>{props.txt} - {props.val} </button>


let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
      </div>
      <ButtonMixed txt="Button Mix" />
      <LabelMixed txt="Label Mix" />

    </div>
    );
  }
}

export default App;
