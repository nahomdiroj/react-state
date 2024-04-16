import React, { Component } from 'react'
import CounterDisplayer from './CounterDisplayer'
import EvenCounterDisplayer from './EvenCounterDisplayer'
 class MyCounter extends Component {
    constructor() {
      super()
    this.state = {
         counter:0,
         evenCount:0,
      }
    }
    allClicksCounter=()=>{
        this.setState((prev)=>({counter:prev.counter+1}));
        }
     evenClicksCounter=()=>{
      this.setState((state) =>{
  if(state.counter % 2 === 0){
return{evenCount:state.evenCount + 2};
    }
      })
     }
     counters = ()=>{
      this.allClicksCounter();
      this.evenClicksCounter();
     }

    render() {
    const {counter,evenCount}=this.state
    return (
      <div>
        <button onClick={this.counters}> click here </button>
        <CounterDisplayer AllClicks={counter} />
        <EvenCounterDisplayer evenClicks={evenCount} />
      </div>
    );
  }
}

export default MyCounter
