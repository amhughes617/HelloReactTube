import React from 'react'; //es6 getting React; creates components
import ReactDOM from 'react-dom'; //interacts with the DOM

const API_KEY = 'AIzaSyAP3sOevtKXpR6Oxou8AxavG5e_HXsWdnM';

// Create a new component to produce html.
const App = () => {
  return <div>Hi!</div>; //JSX
}

// Take this component's generated HTML and put it on the page(DOM)
ReactDOM.render(<App />, document.querySelector('.container')); //JSX tags to make an instance of App to render to the DOM
