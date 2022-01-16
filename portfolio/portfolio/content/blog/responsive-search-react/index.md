---
title: Creating a Responsive Search in React
date: "2021-04-25"
tags: [React, API, RESTful]
thumbnail: ./react-screenshot.png
description: I'm going to do another one-off blog post on a subject that I've seen people ask...how to create a responsive search bar in React.
---

I'm back again this week!

I'm going to do another one-off blog post on a subject that I've seen people ask...how to create a responsive search bar in React.

(If you find yourself stuck and/or want to see the finished product, check out the repo [here](https://github.com/abeciana1/responsive-movie-search).)

# Getting Started

First things first, we need create a new React app

```bash
npx create-react-app <app-name>
```

Then, cd into the directory with `cd <app-name>`

Personally, as a next step, I like to start my server (run `npm start`) and see the changes on a separate monitor.

## Using APIs

Using an API can be a lot of fun to bring an idea to life. It's also necessary if you hope to use third-party data within your app. Today, we'll be using [TheMovieDB API](https://developers.themoviedb.org/3/getting-started/introduction). I have used this API in the past because I love movies and it's free with unlimited requests.

Create an account [here](https://www.themoviedb.org/) and then navigate to your [account settings](https://www.themoviedb.org/settings/api), click on "API" and generate an API key

The most important thing to remember when using an API is to never push your code with an API key in public view. Our next step will be to create a `.env` file. We will save our API key in this environment file and we will be able to reference it within our app. We also want to open our `.gitignore` file and on a new line, type `*.env` so that when we push our code our `.env` file will ignored by GitHub.

Your `.env` file should look something like this:

```
TMDB_API_KEY=000000000000api00000000000key
```

We will also need to require a new package called `react-dotenv`. If you have used other forms of `dotenv` in other languages, it's essentially the same thing. It's how we can use our environment variable (the API key in `.env`) in our app to make API calls.

Run this command:

```bash
npm install react-dotenv
```

## Using Redux

We can use Redux in app, but Redux is a powerful tool for something as simple as this application it isn't needed. However, I'll save the Redux solution for next week. This week, let's just focus on how a responsive search works and communicating with the API.

# Our App

If you're creating your own repo, I **strongly** suggest that you create a separate branch. You don't want to edit code on the main branch because that could a lot of disruptions if working on a team which is something you'll have to get used to if this is a career path or hobby you want to follow. Editing on the main branch isn't a big deal if you're working alone, but it is a bad habit.

Now that I gave my short spiel about using separate branches on GitHub, let's talk about our app. I created a file for our movie search form.

```jsx
import React from "react";

import "../css/movie-search-form.css";

class MovieSearchForm extends React.Component {
  state = {
    searchTerm: ""
  };

  changeHandler = e => {
    this.setState({
      searchTerm: e.target.value
    });
    this.props.searchTermHandler(e.target.value);
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <input
            class="search-bar"
            type="text"
            name="searchTerm"
            placeholder="Type a movie title"
            value={this.state.searchTerm}
            onChange={this.changeHandler}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default MovieSearchForm;
```

My CSS file for this component:

```css
.search-bar {
  font-size: 40px;
  border-radius: 30px;
  padding: 10px;
  background-color: transparent;
  box-shadow: 24px 24px 60px #c8ccbc, -24px -24px 60px #f8f8f8;
}
/* I wanted to work a neumorphic design style */
```

The function passed down via props, `searchTermHandler` comes from my `app.js` file:

```jsx
import React, { useState } from "react";
import "./App.css";
import env from "react-dotenv";

//! import components here
import MovieSearchForm from "./components/MovieSearchForm";
import SearchResultContainer from "./components/SearchResultContainer";

//! import layouts here
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  const [title, setTitle] = useState("");

  const searchTermHandler = searchTerm => {
    setTitle(searchTerm);
  };

  return (
    <DefaultLayout>
      <MovieSearchForm searchTermHandler={searchTermHandler} />
      <br />
      <br />
      <SearchResultContainer movies={movies} />
    </DefaultLayout>
  );
}

export default App;
```

Now that we have our search form working and we can communicate to our parent component (`app.js`), we can start working on connecting to the API.

## Connecting to our API

We're going to talk some more about our friend `react-dotenv`. Check out the documentation [here](https://www.npmjs.com/package/react-dotenv).

Inside of the `package.json` file, under `"scripts"`, append these commands by adding `react-dotenv &&` to them:

```jsx
		"start": "react-dotenv && react-scripts start", // <-- append command
		"build": "react-dotenv && react-scripts build", // <-- append command
    "serve": "react-dotenv && serve build", // <-- append command
```

After making the changes to the commands, restart the server.

I'm adding a function to our `App` component:

```jsx
import React, { useState } from "react";
import "./App.css";
import env from "react-dotenv";

//! import components here
import MovieSearchForm from "./components/MovieSearchForm";
import SearchResultContainer from "./components/SearchResultContainer";

//! import layouts here
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  const [movies, setMovies] = useState("");

  const searchTermHandler = searchTerm => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        env.TMDB_API_KEY
      }&language=en-US&query=${searchTerm
        .split(" ")
        .join("%20")}&page=1&include_adult=false`
    )
      .then(response => response.json())
      .then(movies => {
        setMovies(movies.results);
      });
  };

  return (
    <DefaultLayout>
      <MovieSearchForm searchTermHandler={searchTermHandler} />
      <br />
      <br />
      <SearchResultContainer movies={movies} />
    </DefaultLayout>
  );
}

export default App;
```

Here I'm using `useState` again and making an API fetch call to the TMDB API. I use `setMovies` to set that state of `movies` and pass it as a prop to the child component `SearchResultContainer`.

Within the component `SearchResultContainer`, I created the `moviesMap` function with the purpose of iterating through the `movies` prop array passed down from `App` and returning some form search result cards for the movies.

```jsx
import React from "react";
import SearchResultCard from "./SearchResultCard";

const SearchResultContainer = props => {
  const moviesMap = movs => {
    return movs.map(movie => <SearchResultCard movie={movie} />);
  };

  return (
    <React.Fragment>
      {props.movies ? moviesMap(props.movies) : null}
    </React.Fragment>
  );
};

export default SearchResultContainer;
```

Creating the `SearchResultCard` component is fun because now you can stylize your search results. For me, I went kinda basic, but the world is your oyster!

You may have noticed that I use ternary conditional statements in a couple of the files. If we were using Redux, we wouldn't need to, but with a plain old React app and using state that traverses our component hierarchy, it becomes necessary.

```jsx
import React from "react";

import SearchCard from "../layouts/SearchCard";

const SearchResultCard = props => {
  console.log(props.movie);
  return (
    <React.Fragment>
      {props.movie ? (
        <SearchCard>
          <div>
            {props.movie.poster_path ? (
              <img
                src={
                  "https://image.tmdb.org/t/p/w500" + props.movie.poster_path
                }
                alt={props.movie.title}
                style={{ height: "200px", float: "left", paddingRight: "20px" }}
              />
            ) : (
              <img
                src={
                  "https://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png"
                }
                alt={props.movie.title}
                style={{ height: "200px", float: "left" }}
              />
            )}
            <h3>{props.movie.title}</h3>
            <h4>Released {props.movie.release_date.split("-")[0]}</h4>
            <p>
              <strong>Overivew:</strong> {props.movie.overview}
              <br />
              <br />
              <a
                href={"https://www.themoviedb.org/movie/" + props.movie.id}
                target="_blank"
                alt={props.movie.title}
                rel="noreferrer"
              >
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid black",
                    borderRadius: "20px",
                    padding: "10px",
                    fontSize: "18px"
                  }}
                >
                  Read More via TMDB.org
                </button>
              </a>
            </p>
          </div>
        </SearchCard>
      ) : null}
      <br />
      <br />
    </React.Fragment>
  );
};

export default SearchResultCard;

//! Sample response

//* adult: false
//* backdrop_path: "/rz6UU6A5WxQTgRjKa2LSsGPv1kF.jpg"
//* genre_ids: (5) [16, 12, 18, 14, 10749]
//* id: 30491
//* original_language: "ja"
//* original_title: "Parumu no Ki"
//* overview: "A Tree of Palme is an interpretation of the Pinocchio tale. It concerns a small puppet, Palme, who was tasked by his creator to look over his ailing wife, Xian. After her passing, Palme is visited by a mysterious woman who he mistakenly believes to be Xian. Shaken out of his sadness, Palme accepts her request to deliver something special to a far-off place known as Tama. This sets Palme off on a journey to discover his own emotions, and what it truly means to be human."
//* popularity: 3.412
//* poster_path: "/7ZJgUbuAsCAzg2Yav8eD5PqpHTN.jpg"
//* release_date: "2002-03-16"
//* title: "A Tree of Palme"
//* video: false
//* vote_average: 6.3
//* vote_count: 8
```

(A fun addition to this would to use another API that locates a movie on a streaming provider)

Our job isn't done here. It never really is. When working with React, you're always going to be refactoring your code. Especially if we want to clean this up and use Redux.

<img src="./movie-search.gif" alt="Movie Search Demo">

# Conclusion

Next week, I hope to either go through a refactoring blog post and add Redux OR do a different topic. Seriously, email me ( alex.beciana@gmail.com ) if there's something that you would like me to write about and explain!
