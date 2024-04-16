import React, { Component } from 'react'
 class EvenCounterDisplayer extends Component {
  render() {
    const {evenClicks}=this.props;
    return (
      <div>
        <h1>Even clicks Counter :{evenClicks}</h1>
      </div>
    );
  }
}

export default EvenCounterDisplayer
