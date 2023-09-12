# Zuri HNG Frontend

Welcome to Zuri HNG Frontend, a platform where interns showcase their frontend development skills. This repository contains the code for the frontend task. Please read the following information to get started.

## Task Description
Build a dynamic movie discovery web application that allows users to search for movies, view movie details, and save their favorite movies. The application will consume data from the TMDB API.

## Requirements
### User Interface:

Create a responsive and visually appealing user interface based on this design.
Display the top 10 movies on the homepage.
Present them in a grid layout with movie posters.
The Card component should display the movie title and release date.
Use the following data-testid attributes: [data-testid: movie-card], [data-testid: movie-poster], [data-testid: movie-title], [data-testid: movie-release-date].

### Movie Search:

Implement a search feature that allows users to search for movies by title.
Display search results, including movie posters, titles, and release dates.
Show a loading indicator while fetching search results.
### Movie Details:

Create a route /movies/:id (where :id is the imdb_id) to display movie details.
Display the movie title, release date (in UTC), runtime (in minutes), and overview.
Use the following data-testid attributes: [data-testid: movie-title], [data-testid: movie-release-date], [data-testid: movie-runtime], [data-testid: movie-overview].
### API Integration:

Consume the TMDB API to fetch movie data.
Use the API endpoint for fetching movie details: https://api.themoviedb.org/3/movie/{movie_id}.
### Error Handling:

Implement error handling to display meaningful error messages to users in case of API failures or other issues.
### Submission:

Host your frontend application on a platform of your choice (e.g., GitHub Pages, Netlify).
Provide clear instructions on how to run your project locally in your README.md file.
Ensure that the code is well-documented and organized.
## Technologies Used
<p>React</p>
<p>JavaScript</p>
<p>Tailwind CSS</p>
