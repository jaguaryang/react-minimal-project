import React, { Component } from 'react';

class HelloWorld extends Component {

  constructor(props) {
    super(props)
    this.test()
  }

  test() {
    console.log(1243)
  }

  render() {
    return (<>Hello World!!!!</>);
  }

}

export default HelloWorld;