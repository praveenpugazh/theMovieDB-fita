import React from 'react'

class ClassComponent extends React.Component {
  constructor(props) {
    //mandatory
    super(props) // mandatory
    this.state = {
      counter: 0
    }
  }
  updateCounter = () => {
    this.setState({ counter: this.state.counter + 1 })
  }
  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 })
  }
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.decrementCounter}>decrement</button>
        <button onClick={this.updateCounter}>increment</button>
      </>
    )
  }
}

export default ClassComponent

// state, componentDidMount, componentWillUpdate, componentWillUnmount

