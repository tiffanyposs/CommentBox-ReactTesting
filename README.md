# React Testing - Comment Box

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a project from this Udemy course [Advanced React and Redux](https://www.udemy.com/react-redux-tutorial/learn/v4/overview)


## Testing

A simple *React/Redux* application to show testing using *Jest* and *Enzyme*.


### Notes

```
$ npm run test

```

* you can setup a folders named `__tests__` to contain all of your tests. Alternatively, you can name all of you files in the regular file structure ending in `test.js`, example: `App.test.js`.
* You must setup a `setupTests.js` file in the `src` folder in order to get `Enzyme` testing to work.
* If you get a test to pass, try to break it to make sure your test doesn't _always_ pass.
* Unit Tests - Isolate one part of the application and see if it works ( in the individual `src/components`, `src/reducers`, and `src/actions`)
* Integration Tests - Does doing this produce that (these are in the main level `src` directory in `__tests__`)
* Cannot create API requests in JSDom in the test suite


#### Enzyme API

[General Docs](https://airbnb.io/enzyme/)

The Enzyme API has three parts: *Static Renderer*, *Shallow Renderer*, *Full DOM Renderer*

##### Static Renderer

Renders the given component and return plain HTML.

##### Shallow Renderer

[Docs](https://airbnb.io/enzyme/docs/api/shallow.html)

Renders just the given component and none of it's children.

##### Full DOM Renderer

[Docs](https://airbnb.io/enzyme/docs/api/mount.html)

Renders the component and all if it's children and lets us modify/interact with it.

## Higher Order components

`Higher Order Components` are a way to extract redundant code from multiple component into one reusable component.

Steps to writing a `Higher Order Component`:

* Write the logic you want to reuse into a component
* Create a HOC file and add the HOC scaffold
* Move the reusable logic into the HOC
* Pass props/config/behavior through to child

### Notes

* Components named starting with lowercase are functional, while class components start with uppercase
