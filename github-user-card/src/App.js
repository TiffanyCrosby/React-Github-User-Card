import React, { Component } from 'react'
import axios from 'axios'

import UserCard from './components/UserCard'

import './App.css'



class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/TiffanyCrosby")
      .then(response => {
        console.log('response data', response.data);
        this.setState({ user: response.data })
      })
      .catch(error => console.log('Error: ', error));




    axios
      .get("https://api.github.com/users/TiffanyCrosby/followers")
      .then(response => {
        console.log('followers data', response.data);
        this.setState({ followers: response.data });
      })
      .catch(error => console.log('Error: ', error));
  }


  render() {
    return (
      <div className='body'>
        <h1>This Is Me</h1>
        <div className='main-user'>
          {<UserCard
            login={this.state.user.login}
            id={this.state.user.id}
            img={this.state.user.avatar_url}
            bio={this.state.user.bio}
            repos={this.state.user.public_repos}
          />}
        </div>
        <h1>GitHub Followers</h1>
        <div className='followers'>
          {this.state.followers.map(follower => (
            <UserCard
              login={follower.login}
              id={follower.id}
              img={follower.avatar_url}
              repos={follower.repos_url}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App;