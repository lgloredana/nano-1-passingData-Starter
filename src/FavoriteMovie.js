import React, { Component } from 'react';

class FavoriteMovie extends Component {
  render() {
    let usersInfo;
    if (this.props.users.length === 0 ){
      usersInfo = <p>None of the current users liked this movie</p> 
    }else {
      usersInfo = <div><p>Liked By:</p><ul>{this.props.users.map(user => <li key={user.name}>{user.name}</li>)}</ul></div>
    }
    return (
      <div>
      	<h2>{this.props.movieName}</h2>
      	{usersInfo}
      </div>
    )
  }
}

export default FavoriteMovie;