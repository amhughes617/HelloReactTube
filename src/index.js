import React from 'react'; //es6 getting React; creates components
import ReactDOM from 'react-dom'; //interacts with the DOM
import dotenv from 'dotenv';

//need to specify ./ (current directory) and give file path for this because it is not a library like the stuff above
import SearchBar from './components/search_bar';//don't need file extension as long as it's a .js file

dotenv.load();

const API_KEY = process.env.API_KEY;

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Take this component's generated HTML and put it on the page(DOM)
ReactDOM.render(<App />, document.querySelector('.container')); //JSX tags to make an instance of App to render to the DOM
