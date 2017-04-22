import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      who: 'World abc',
    }
  }
  render() {
    const { who } = this.state
    return (
      <div>
        Hello {who} !
        <div>
          <img src="/public/image/octocat.jpg" alt="octocat" />
        </div>
      </div>
    )
  }
}
