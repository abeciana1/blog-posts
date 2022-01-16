---
title: State Management with Redux, Part 2
date: "2021-03-27"
tags: [Redux, JavaScript, State Management]
thumbnail: ./redux.jpg
description: In this series, I want to go over the who, what, and why of Redux as a tool, separate from React, and then go over the popular combination of React and Redux.
---

I've been looking forward to publishing this blog post all week!

Today, I'm going to show you how you can integrate Redux into vanilla JavaScript. To reiterate, Redux is NOT just for React, it can be used a variety of frameworks as long as they're JavaScript frameworks. Other frameworks have their own versions of state management tools (i.e. .[NET and redux.NET](https://github.com/GuillaumeSalles/redux.NET)).

This week we're going to create a simple bakery application that will allow us the ability to manage our inventory (our state).

# Getting Started

In my last blog post, I briefly touched upon this but we need to setup our `index.js` file. The first thing to do after creating the profile is to import Redux, like so:

```jsx
const redux = require("redux");
```

If we were to do `console.log(redux)`, we would receive:

```jsx
{
  __DO_NOT_USE__ActionTypes: {
    INIT: '@@redux/INITq.p.0.s.p.m',
    REPLACE: '@@redux/REPLACEy.q.t.k.7',
    PROBE_UNKNOWN_ACTION: [Function: PROBE_UNKNOWN_ACTION]
  },
  applyMiddleware: [Function: applyMiddleware],
  bindActionCreators: [Function: bindActionCreators],
  combineReducers: [Function: combineReducers],
  compose: [Function: compose],
  createStore: [Function: createStore]
}
```

We went over what all of the functions to do, so please check out last week's [post](https://www.alexbeciana.com/state-management-with-redux-1/) if you need a refresher.

## Creating Our State Object

As I mentioned in last week's post, Redux allows us to manage our state as a separate tree outside of our application.

To start our bakery application, we'll assume we start each morning with a full inventory of 10 cake on display:

```jsx
const bakeryInventory = {
  cake: 10
};
```

So far, your file should look something like this:

```jsx
const redux = require("redux");

console.log(redux);

//! our state
const bakeryInventory = {
  cake: 10
};

//! actions

//! reducers

//! store
```

I added section for our actions, reducers, and store so that I can stay organized while working in this one file.

This next part can sometimes feel a bit overwhelming and a lot to manage. I've heard people that say sometimes don't know where to start. Please take a look at the diagram below. This shows you how Redux works.

JavaScript dispatches an Action which communicates to the Reducer. The Reducer changes state and re-renders our JavaScript application. Remember, our JavaScript should never ever change our state directly. State must remain as an immutable object.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/86e976a5-1a4b-4f4b-b0b0-4210cf664ee2/Screen_Shot_2021-02-26_at_3.06.47_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/86e976a5-1a4b-4f4b-b0b0-4210cf664ee2/Screen_Shot_2021-02-26_at_3.06.47_PM.png)

That being said, let's create our first action.

## Creating an Action

Recall last week's Redux overview, our action is a function that returns an object. We usually have a `type` key and a `payload` key. The value of our `type` key helps our reducer discern what behavior our reducer should enact. The value of our `payload` key will be something that we want to return. Today, we're only going to worry about using the `type` key.

I also want to share a helpful strategy to stop the unfortunate issue that some people find themselves in with spelling mistakes and typos. We can create a constant variable and set it equal to the string we want to use with our action type.

```jsx
const SELL_CAKE = "SELL_CAKE";
```

Under our action section, we should have:

```jsx
const SELL_CAKE = "SELL_CAKE";
const BAKE_CAKE = "BAKE_CAKE";

const sellCake = () => {
  return {
    type: SELL_CAKE
  };
};

const bakeCake = () => {
  return {
    type: BAKE_CAKE
  };
};
```

Congrats, we just created our first actions together!

## Creating a Reducer

Remember, our reducer function takes in two arguments, the state and the action. Our reducer takes the action type and based on that it will invoke a certain behavior that will change the state and cause a re-render. Let's create our `cakeReducer` function:

```jsx
const cakeReducer = (state = bakeryInventory, action) => {
 ...
}
```

I want to point out that we want our state argument to have a default value. We're going to use this in our reducer function as a failsafe so that we will return our default state.

Next, we need to create the body of our reducer. You can use if/else if/else statement or you can use a switch/case statement. I personally prefer the case/switch statement because its cleaner to read and its preferred on engineering teams.

Here is what my `cakeReducer` function looks like:

```jsx
const cakeReducer = (state = bakeryInventory, action) => {
  switch (action.type) {
    case BAKE_CAKE:
      return {
        ...state,
        cake: state.bakeryInventory + 1
      };
    case SELL_CAKE:
      return {
        ...state,
        cake: state.bakeryInventory - 1
      };
    default:
      return state;
  }
};
```

If you never used a switch/case statement before, it's fairly simple to understand and it's seen in various programming languages. To briefly go over what's happening: `switch` takes in a condition and based on that condition, if our `case` matches with it, it will return an object. Inside the return object, we're copying our state with the spread operator, and then change state by adding or subtracting a cake from the inventory.

Before we can start using our actions and reducers, we'll need to create our store.

## Creating Our Store

Now, we're going to bring everything together and create our store.

First, we're going to need to import the `createStore` and the `combineReducers` functions from Redux.

```jsx
const redux = require("redux");
const combineReducers = redux.combineReducers;
const createStore = redux.createStore;
```

Next, we need to consolidate our reducers. This application is very small and simple so this is excessive because we only have one reducer. However, if we decided that our bakery should serve coffee to entice people to go to us for fika, then we would have a `coffeeReducer` function as well (separation of concerns).

```jsx
const rootReducer = combineReducers({
  cakeReducer
});
```

Yup, it's that simple and then we can add other reducers if needed.

Let's create our store:

```jsx
const store = createStore(rootReducer);

console.log("initial state", store.getState());
```

If we were to run the `console.log` in the previous code snippet, we would receive:

```jsx
initial state { cakeReducer: { cake: 10 } }
```

Congrats, we created our store and now we can work on dispatching actions.

## Updating State

In this next part, I want to show you how we can log east state change. If we were working with a frontend, we would be able to utilize the Redux Devtools on Google Chrome but this just as good for our app.

You will need to install a new library:

```jsx
npm install redux-logger
```

We're also going to be importing some things into our application:

```jsx
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
```

The line where we created our store will now read:

```jsx
const store = createStore(rootReducer, applyMiddleware(logger));
```

At the bottom of my file, I have:

```jsx
const store = createStore(rootReducer, applyMiddleware(logger));
// const store = createStore(rootReducer)

console.log("initial state", store.getState());

store.dispatch(sellCake());
store.dispatch(sellCake());
store.dispatch(sellCake());

console.log("new state", store.getState());
```

I'm dispatching the `sellCake` action 3 times. Thus, our state after the third dispatch should return with the number of cakes in our inventory being 7.

Check out `redux-logger` logged in my terminal:

```bash
initial state { cakeReducer: { cake: 10 } }
new state { cakeReducer: { cake: 7 } }
alexbeciana@MacBook-Pro redux-blog-post % node index.js
initial state { cakeReducer: { cake: 10 } }
 action SELL_CAKE @ 17:26:31.742
   prev state { cakeReducer: { cake: 10 } }
   action     { type: 'SELL_CAKE' }
   next state { cakeReducer: { cake: 9 } }
 action SELL_CAKE @ 17:26:31.744
   prev state { cakeReducer: { cake: 9 } }
   action     { type: 'SELL_CAKE' }
   next state { cakeReducer: { cake: 8 } }
 action SELL_CAKE @ 17:26:31.745
   prev state { cakeReducer: { cake: 8 } }
   action     { type: 'SELL_CAKE' }
   next state { cakeReducer: { cake: 7 } }
new state { cakeReducer: { cake: 7 } }
```

A similar change would happen if I dispatched the `bakeCake` action 3 times.

```jsx
const store = createStore(rootReducer, applyMiddleware(logger));
// const store = createStore(rootReducer)

console.log("initial state", store.getState());

// store.dispatch(sellCake());
// store.dispatch(sellCake());
// store.dispatch(sellCake());
store.dispatch(bakeCake());
store.dispatch(bakeCake());
store.dispatch(bakeCake());

console.log("new state", store.getState());
```

Check it out:

```bash
initial state { cakeReducer: { cake: 10 } }
 action BAKE_CAKE @ 17:31:05.200
   prev state { cakeReducer: { cake: 10 } }
   action     { type: 'BAKE_CAKE' }
   next state { cakeReducer: { cake: 11 } }
 action BAKE_CAKE @ 17:31:05.202
   prev state { cakeReducer: { cake: 11 } }
   action     { type: 'BAKE_CAKE' }
   next state { cakeReducer: { cake: 12 } }
 action BAKE_CAKE @ 17:31:05.203
   prev state { cakeReducer: { cake: 12 } }
   action     { type: 'BAKE_CAKE' }
   next state { cakeReducer: { cake: 13 } }
new state { cakeReducer: { cake: 13 } }
```

# Conclusion

Today, we learned about using Redux in vanilla JavaScript.

✅ We got imported and used parts of the Redux library as well as install and using the `redux-logger` library.

✅ We created actions

✅ We create reducers and combined them

✅ We created our store

✅ We dispatched actions that updated our state the correct way without mutating it

If you ask me, I think we're ready to learn how to implement Redux in React next week, see you then!

<div style="width:100%;height:0;padding-bottom:71%;position:relative;"><iframe src="https://giphy.com/embed/etGPvG1Pqj9ks" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
