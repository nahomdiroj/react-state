import React, { Component } from 'react'

 class CounterDisplayer extends Component {
  render() {
    const {AllClicks}=this.props;
    return (
      <div>
        <h1>All clicks counter: {AllClicks}</h1>
      </div>
    );
  }
}

export default CounterDisplayer
