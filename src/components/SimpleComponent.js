import React, { Component } from 'react'

export default class SimpleComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mood: 'happy'
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    if (this.state.mood === 'happy') {
      this.setState({
        mood: 'sad'
      })
    } else {
      this.setState({
        mood: 'happy'
      })
    }
  }

  render() {
    return (
      <div onClick={this.clickHandler}>{this.state.mood}</div>
    )
  }
}
