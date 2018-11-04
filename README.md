## React Testing - Comment Box

A simple *React/Redux* application to show testing using *Jest* and *Enzyme*.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a project from this Udemy course [Advanced React and Redux](https://www.udemy.com/react-redux-tutorial/learn/v4/overview)


### Notes

```
$ npm run test

```

* you can setup a folders named `__tests__` to contain all of your tests. Alternatively, you can name all of you files in the regular file structure ending in `test.js`, example: `App.test.js`.
* You must setup a `setupTests.js` file in the `src` folder in order to get `Enzyme` testing to work.
* If you get a test to pass, try to break it to make sure your test doesn't _always_ pass.


### Enzyme API

[General Docs](https://airbnb.io/enzyme/)

The Enzyme API has three parts: *Static Renderer*, *Shallow Renderer*, *Full DOM Renderer*

#### Static Renderer

Renders the given component and return plain HTML.

#### Shallow Renderer

[Docs](https://airbnb.io/enzyme/docs/api/shallow.html)

Renders just the given component and none of it's children.

#### Full DOM Renderer

[Docs](https://airbnb.io/enzyme/docs/api/mount.html)

Renders the component and all if it's children and lets us modify/interact with it.
