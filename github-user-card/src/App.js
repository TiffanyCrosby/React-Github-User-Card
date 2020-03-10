import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
      followers: []
    }
  }

  render() {
    return (
      <div>
        <h1>GitHub Followers</h1>

      </div>
    )
  }
}

export default App;
