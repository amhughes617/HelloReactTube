import React, { Component} from 'react'; //still need this for any component with JSX
// { Component } is like const Component = React.Component;


//This is a functional component
// //component for SearchBar
// const SearchBar = () => {
//   return <input /> ;  //transiles to React.createElement(why I need to import React)
// };
//because files(modules) are siloed from each other need to export so index.js has access

// ES6 class, JavaScript Class, lets this track itself
// class SearchBar extends React.Component
class SearchBar extends Component { //ES6 magic, because of { Component } in import at top
  //Define a render method so I can still return JSX
  render() {
    return <input />;
  }
  //EventHandler is a function that runs when the event happens, will pass to the element we want to monitor
  onInputChange() {
    
  }
}

export default SearchBar;
