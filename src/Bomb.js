// const { Component } = require("react");
import React, { Component } from 'react';

// your Bomb code here!
class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render(){
        if (this.state.secondsLeft > 0){
        return (
            <div>
                {this.state.secondsLeft} seconds left before I go boom!
            </div>
        )} else {
            return (
                <div> 
                    Boom!
                </div>
            )
        }
    }
}

export default Bomb