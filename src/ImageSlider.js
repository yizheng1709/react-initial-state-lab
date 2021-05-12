// your ImageSlider code here!
import React, { Component } from 'react';

class ImageSlider extends Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }

    }
    increment() {
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }
    render() {
        return (
            <div>
                I am on slide {this.state.currentSlideIndex}
            </div>
        )
    }
}

export default ImageSlider