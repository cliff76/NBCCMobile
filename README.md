# NBCC Mobile

New Beginnings Community Church Mobile app

This app currently demonstrates the bare minimum requirements/files needed to create a React based web app.

* Install node/npm and (optional) git
* Initialize the project folder with git support (optional) `git init`
* Initialize the project folder with npm support `npm init`
* Update your system PATH to include `./node_modules/.bin` for cli tools: `export PATH=$PATH:./node_modules/.bin`
* (Optional) Update your `~/.bashrc` for persistent cli tools: `echo "export PATH=$PATH:./node_modules/.bin" >> ~/.bashrc`
* Install dependencies:
* `npm install react react-dom babel-preset-react babel-core babel-preset-es2015 watchify babelify`
* Create a `.babelrc` to configure the babel transpiler: `echo '{ "presets": ["react", "es2015"] }' > .babelrc`
* Create and HTML page with a react mount point. (Any `div` element with an id attribute where you'll render the app.)
* Create an index.jsx file with React JSX syntax
*Watch the JSX file as you develop! `watchify ./index.jsx -o ./bundle.js -t babelify -v`

## What's happening here?

The HTML page defines a mount div element with an id of `root`.
```$html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>NBCC Mobile</title>
</head>
<body>
    <div id="root"/>
    <script src="bundle.js"></script>
</body>
</html>
```

The JSX file contains React Code that *mounts* this div and *renders* a component onto it.
```javascript
// component.jsx
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return <h1>Hello world</h1>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
```
The `npm install` command brings in all of the necessary dependencies to tie everything together. Starting with the 
`react` and `react-dom` modules, these two modules are imported at the top of the JSX file and used throughout. Next 
there is the `watchify` command line tool. This tool runs the `babelify` and `browserify` tools against the JSX file 
initially and listens for any changes to the file. The `babelify` tool converts all JSX syntax to ES2015 JavaScript 
while changing the `import` statements into `require()` function calls. The `browserify` tool resolves all `require()` 
function calls that bring in modules and *inlines* these modules into a final `bundle.js`. This final bundle.js is 
referenced and run in the initial HTML file.

Watchify calls `babel` which converts the JSX into ES2015 code:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return React.createElement(
      'h1',
      null,
      'Hello world'
    );
  }
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
```
The `watchify` command also includes the babel transform which converts the `import` statements to `require()` function
calls:
```javascript
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _reactDom = require('react-dom');
var _reactDom2 = _interopRequireDefault(_reactDom);
```

The `watchify` command then calls `browserify` which resolves the `require()` statements and *inlines* all code into 
a final `bundle.js` file.
