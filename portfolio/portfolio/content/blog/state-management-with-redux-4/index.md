---
title: State Management with Redux, Part 4
date: "2021-04-11"
tags: [Redux, React, JavaScript, State Management, APIs, Thunk]
thumbnail: ./redux.jpg
description: In this series, I want to go over the who, what, and why of Redux as a tool, separate from React, and then go over the popular combination of React and Redux.
---

Woo!

I'm happy to share two bits of good news with you: my appointment for the vaccine is later this week and we're going to go over making asynchronous API calls.

# Getting Started

We're going to continue where we left off last week with our React app.

Since we don't have an actual backend for this app, we're going to use [JSONPlaceholder](https://jsonplaceholder.typicode.com/) and list 10 users who will act as a list of bakers on our app. The goal of this blog post is to simply use the GET method to populate a list of 10 users.

In case you're not familiar with JSONPlaceholder, it's a great way to test and prototype an API and get your hands on some fake data.

# Redux

## Using Middleware and Thunk

Today, we're going to be using Thunk middleware for Redux with our application and you can find documentation [here](https://github.com/reduxjs/redux-thunk).

### Install `redux-thunk`

```bash
npm install redux-thunk

yarn add redux-thunk
```

### Why use `redux-thunk`?

With a normal Redux store, we can only make synchronous calls. Therefore, we use `redux-thunk` so that we can extend the abilities of our store and perform asynchronous actions like API calls and router transitions.

`redux-thunk` also allows us to perform logic within our actions instead of returning only an object and still interact with the state.

## Implementation

After installing `redux-thunk`, let's navigate to `index.js` and import `thunk`.

(Don't forget to import `applyMiddleware` too)

```jsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import thunk from "redux-thunk"; // <== Importing thunk

import rootReducer from "./reducers";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux"; //<== we'll need to add applyMiddleware too

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

Next we're going to need to add this to our store.

You make think we should do something like this in our `createStore` function:

```jsx
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
```

I'm sorry to say that would be wrong because you'll receive this error:

**`Error: It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.`**

Recall, our `createStore` function can only task two arguments. However, we can use the built-in `compose` function that Redux provides because it allows use apply several store enhances. (Read more about it [here](https://redux.js.org/api/compose).)

```jsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__() &&
  compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

With this implementation, you should notice that the error isn't there anymore and we can interact with our app again.

## Working with Thunk

As mentioned above, we're going to use JSONPlaceholder and import a list of 10 users (our bakers) via a GET request.

There's a few changes that I'm adding:

- I'm creating a `baker-actions.js` file in our `actions` folder
- I'm creating a `baker-reducer.js` file in our `reducers` folder
- I'm create a `BakerComponent.js` file in our `Components` folder

**Here's what I have so far:**

`baker-actions.js`

```jsx
export const GET_BAKERS = "GET_BAKERS";

export const getBakers = () => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  };
};
```

`baker-reducer.js`

```jsx
import { GET_BAKERS } from "../actions/baker-actions";

const bakers = {
  bakers: []
};

const bakerReducer = (state = bakers, action) => {
  switch (action.type) {
    case GET_BAKERS:
      return {
        ...state,
        bakers: action.payload
      };
    default:
      return state;
  }
};

export default bakerReducer;
```

`BakerComponent.js`

```jsx
import React from "react";

const BakerComponent = props => {
  return (
    <React.Fragment>
      <ul>
        <li>props</li>
      </ul>
    </React.Fragment>
  );
};

export default BakerComponent;
```

`app.js`

```jsx
import React from "react";
// import logo from './logo.svg';
import "./App.css";
import BakerComponent from "./Components/BakerComponent";
import CakeComponent from "./Components/CakeComponent";

function App() {
  return (
    <React.Fragment>
      <div style={{ margin: "50px", textAlign: "center" }}>
        <CakeComponent />
      </div>
      <BakerComponent />
    </React.Fragment>
  );
}

export default App;
```

## Working with Redux and Thunk

Now, I've added a few changes to our `app.js` file, take a look:

```jsx
import { React } from "react";
// import logo from './logo.svg';
import "./App.css";
import BakerComponent from "./Compoonents/BakerComponent";
import CakeComponent from "./Compoonents/CakeComponent";

import { connect } from "react-redux";
import { getBakers } from "./actions/baker-actions";

const renderBakers = props => {
  props.getBakers();
};

function App(props) {
  renderBakers(props);
  return (
    <>
      <div style={{ margin: "50px", textAlign: "center" }}>
        <CakeComponent />
      </div>
      <BakerComponent />
    </>
  );
}

const mapStateToProps = state => {
  return state.baker;
};

const mapDispatchToProps = {
  getBakers
};

export default connect(mapStateToProps, mapDispatchToProps)(App, renderBakers);
```

I added `props` as an argument in our functional component along with the `mapStateToProps` and `mapDispatchToProps` functions.

I created a `renderBakers` function that when invoked it will hit our async action `getBakers`. Let's take a look at our `BakerComponent` file:

```jsx
import React from "react";

import { connect } from "react-redux";
import { getBakers } from "../actions/baker-actions";

const BakerComponent = props => {
  //console.log(props)
  return (
    <React.Fragment>
      {props.bakers.map(baker => (
        <ul>
          <li>{baker.name}</li>
        </ul>
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return state.baker;
};

const mapDispatchToProps = {
  getBakers
};

export default connect(mapStateToProps, mapDispatchToProps)(BakerComponent);
```

The line `{props.bakers.map(baker => <ul><li>{baker.name}</li></ul>)}` maps through our array of bakers and returns an unordered list of baker names.

# Conclusion

I hope you found this blog post series helpful and engaging. For my next subject, I'm torn between a few choices. However, I think a series or one-off post about marketing in web development could be important.
