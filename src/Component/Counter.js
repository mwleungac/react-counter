import React, { Component } from 'react'
import { INIT_COUNTER_VALUE } from '../Constants/Constants'
import { COUNTER_INCREMENT } from '../Constants/Constants'
import { COUNTER_DECREMENT } from '../Constants/Constants'

export default class Counter extends Component {
constructor(props) {
    super(props);

    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
    
    this.state = {
         value: INIT_COUNTER_VALUE
    };
}


onIncrease(){
    this.setState(prevState => {
        return{
        value: prevState.value + COUNTER_INCREMENT
        };
    })
}

onDecrease(){
    this.setState(prevState => {
        return{
        value: prevState.value + COUNTER_DECREMENT
        };
    })
}


componentDidUpdate(prevProps, prevState) {
    if(this.props.number !== prevProps.number) {
        this.setState({value: INIT_COUNTER_VALUE}); 
    }
    if(this.state.value > prevState.value) {
        this.props.onCalculate(COUNTER_INCREMENT);
    }
    else if(this.state.value < prevState.value) {
        this.props.onCalculate(COUNTER_DECREMENT);
    }
}

    render() {

        return (
            
            <div>
                <button onClick = {this.onIncrease}>+</button>
                <span>{this.state.value}</span>
                <button onClick = {this.onDecrease}>-</button>
            </div>
        )
    }
}


