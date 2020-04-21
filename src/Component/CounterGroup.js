import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter';
import { INIT_COUNTER_SIZE } from '../Constants/Constants'
import { INIT_COUNTER_GROUP_SUM } from '../Constants/Constants'

export default class CounterGroup extends Component {
  constructor(props) {
      super(props)

      this.onChange = this.onChange.bind(this);
      this.onCalculate = this.onCalculate.bind(this);

      this.state = {
          size: INIT_COUNTER_SIZE,
          sum: INIT_COUNTER_GROUP_SUM
          
      }
  }


onChange(event){
    const value = event.target.value;
    this.setState({
        size: value.length > 0 ? parseInt(value):0
    })
}

initArray(size){
    const array = Array.from(Array(size).keys());
    console.log(array);
    return array;
}

onCalculate(variable) {
    this.setState(prevState => ({sum: prevState.sum + variable}));
}

    render() {
          
        let counters = this.initArray(this.state.size);
        return(
            <div>
            <form> 
               <input onChange={this.onChange} type="text" value={this.state.size}/>
               
               <p>Sum of all counters: {this.state.sum}</p>
             
              </form>

                        
              {counters.map((value)=> (
              <Counter 
              key={value}
              number = {this.state.number}
              onCalculate = {this.onCalculate}/>
              ))}

            </div>
        )       

    }
}
