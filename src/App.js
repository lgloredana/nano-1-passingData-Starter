import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
//import UserFavoritMovie from './UserFavoritMovie';

/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/
// eslint-disable-next-line 
const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];
// eslint-disable-next-line 
const users = {
  1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 4,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};
// eslint-disable-next-line 
const movies = {
  1: {
    id: 1,
    name: 'Planet Earth 1',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

class App extends Component {
  render() {

 //  let moviesArr = [];
 //  for( let prop in movies){
 //  		moviesArr.push(movies[prop]);
  // }
 //  let usersArr = [];
  // for( let prop in users){
 //	   usersArr.push(users[prop]);
  // }
    
  // let result = usersArr.map((user) => 
  //                         { 
   //                          const userProfile = profiles.find( profile => parseInt(profile.userID, 10) === user.id);
      //                       const movieInfo = moviesArr.find( movie => movie.id === parseInt(userProfile.favoriteMovieID, 10));

    //                         return {userID: user.id, msg: `${user.name} favorite movie is ${movieInfo.name}`};
   //                        });
    
//    const usersMovieInfo = [];
//    for(let prop in users){
//      const userProfile = profiles.find(profile => parseInt(profile.userID, 10) === users[prop].id);
//      let userFavMovie;
///      for(let prop in movies){
 ///       if( movies[prop].id === parseInt(userProfile.favoriteMovieID, 10) ) userFavMovie = movies[prop].name;
 ///     }
 ////     usersMovieInfo.push({userID: users[prop].id, msg:`${users[prop].name} favorite movie is ${userFavMovie}`});
 //   }

    
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<ul>
          <h2>Favorite Movies</h2>
          {profiles.map( profile => {
          const userName = users[profile.userID].name ; 
          const movieName = movies[profile.favoriteMovieID].name;
          return (
            <li key={profile.id}>{ `${userName}'s favorite movie is "${movieName}" `}</li>
          )
          })}
 		</ul>

      </div>
    );

         //		{result.map(userInfo => <UserFavoritMovie key={userInfo.userID} info={userInfo.msg}/>)}

  }
}

export default App;
