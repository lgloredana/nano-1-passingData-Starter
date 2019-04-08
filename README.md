
## Running the application

 - `npm install` - for getting the required libs  
 - `npm start` - for opening the application in browser
 
# Instructions

Display a list of movies.

For each movie in the list, there are two options:

1. If the movie has been favorited, then display a list of all of the users who said that this movie was their favorite.
2. If the movie has *not* been favorited, display some text stating that no one favorited the movie.

The app is *modular* it has reusable React components.

## Example

```html
<h2>Forrest Gump</h2>
<p>Liked By:</p>
<ul>
  <li>Nicholas Lain</li>
</ul>

<h2>Get Out</h2>
<p>Liked By:</p>
<ul>
  <li>John Doe</li>
  <li>Autumn Green</li>
</ul>

<h2>Autumn Green</h2>
<p>None of the current users liked this movie</p>
```