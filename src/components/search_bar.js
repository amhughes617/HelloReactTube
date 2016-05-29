import React, { Component } from 'react'; //still need this for any component with JSX
// { Component } is like const Component = React.Component;

// 1
class SearchBar extends Component { //ES6 magic, because of { Component } in import at top
  constructor(props) {
    super(props);

    this.state = { term: '' }; // initializes state
  }
  // 2
  render() {
    return (
      <div>
        <input
          value={this.state.term}   //value only changes when the state changes, controlled by state
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
  // 3
}

export default SearchBar;





// 1
//This is a functional component
// //component for SearchBar
// const SearchBar = () => {
//   return <input /> ;  //transiles to React.createElement(why I need to import React)
// };
//because files(modules) are siloed from each other need to export so index.js has access
// ES6 class, JavaScript Class, lets this track itself
// class SearchBar extends React.Component
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2
//Define a render method so I can still return JSX
//element emits a change event, vanilla HTML event
//JSX JavaScript variables wrapped with curlies, onChange is a React property to grab this type of event
//don't need parens around first event when only a single argument
//making the below eventHandler into a single line arrow function
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3
//EventHandler is a function that runs when the event happens, will pass to the element we want to monitor
//browser event object passed here, describes the event and its properties
// onInputChange(event) {
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
