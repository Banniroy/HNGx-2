# MovieBox - Movie Discovery Web Application

MovieBox is a dynamic movie discovery web application that allows users to search for movies, view movie details, and save their favorite movies. This project consumes data from the TMDB API and is built using React and styled with Tailwind CSS.

![MovieBox Screenshot](screenshot.png)

## Table of Contents

-   [Features](#features)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Configuration](#configuration)
-   [Usage](#usage)
    -   [Running Locally](#running-locally)
    -   [Building for Production](#building-for-production)
-   [Folder Structure](#folder-structure)
-   [API Integration](#api-integration)
-   [Styling](#styling)
-   [Error Handling](#error-handling)
-   [Contributing](#contributing)
-   [License](#license)
-   [Acknowledgments](#acknowledgments)

## Features

1. **User Interface**:

    - Responsive and visually appealing design.
    - Displays the top 10 movies on the homepage in a grid layout with movie posters, titles, and release dates.

2. **Movie Search**:

    - Allows users to search for movies by title.
    - Displays search results, including movie posters, titles, and release dates.
    - Shows a loading indicator while fetching search results.

3. **Movie Details**:

    - Access movie details by navigating to `/movies/:id`, where `:id` is the IMDb ID.
    - Displays movie details, including title, release date (in UTC), runtime (in minutes), and an overview.

4. **API Integration**:

    - Consumes the TMDB API to fetch movie data.
    - Utilizes the following API endpoint: `https://api.themoviedb.org/3/movie/{movie_id}`.

5. **Error Handling**:
    - Implements error handling to display meaningful error messages to users in case of API failures or other issues.

## Getting Started

### Prerequisites

Before getting started, you'll need the following:

-   Node.js and npm (Node Package Manager) installed on your machine.
-   A TMDB API key. You can obtain one by signing up on the [TMDB website](https://www.themoviedb.org/documentation/api).

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/moviebox.git
    cd moviebox
    ```

Certainly! Here's a well-documented README for your React movie discovery app using React and Tailwind CSS:

markdown
Copy code

# MovieBox - Movie Discovery Web Application

MovieBox is a dynamic movie discovery web application that allows users to search for movies, view movie details, and save their favorite movies. This project consumes data from the TMDB API and is built using React and styled with Tailwind CSS.

![MovieBox Screenshot](screenshot.png)

## Table of Contents

-   [Features](#features)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Configuration](#configuration)
-   [Usage](#usage)
    -   [Running Locally](#running-locally)
    -   [Building for Production](#building-for-production)
-   [Folder Structure](#folder-structure)
-   [API Integration](#api-integration)
-   [Styling](#styling)
-   [Error Handling](#error-handling)
-   [Contributing](#contributing)
-   [License](#license)
-   [Acknowledgments](#acknowledgments)

## Features

1. **User Interface**:

    - Responsive and visually appealing design.
    - Displays the top 10 movies on the homepage in a grid layout with movie posters, titles, and release dates.

2. **Movie Search**:

    - Allows users to search for movies by title.
    - Displays search results, including movie posters, titles, and release dates.
    - Shows a loading indicator while fetching search results.

3. **Movie Details**:

    - Access movie details by navigating to `/movies/:id`, where `:id` is the IMDb ID.
    - Displays movie details, including title, release date (in UTC), runtime (in minutes), and an overview.

4. **API Integration**:

    - Consumes the TMDB API to fetch movie data.
    - Utilizes the following API endpoint: `https://api.themoviedb.org/3/movie/{movie_id}`.

5. **Error Handling**:
    - Implements error handling to display meaningful error messages to users in case of API failures or other issues.

## Getting Started

### Prerequisites

Before getting started, you'll need the following:

-   Node.js and npm (Node Package Manager) installed on your machine.
-   A TMDB API key. You can obtain one by signing up on the [TMDB website](https://www.themoviedb.org/documentation/api).

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/moviebox.git
    cd moviebox
    Install project dependencies:
    npm install
    ```

Configuration
Create a .env.local file in the root directory.

Add your TMDB API key to the .env.local file:
REACT_APP_TMDB_API_KEY=YOUR_API_KEY

Usage
Running Locally
To run the project locally for development:
npm start
