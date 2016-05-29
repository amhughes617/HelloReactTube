import React, { Component } from 'react'; //es6 getting React; creates components
import ReactDOM from 'react-dom'; //interacts with the DOM
import YTSearch from 'youtube-api-search';

//need to specify ./ (current directory) and give file path for this because it is not a library like the stuff above
import SearchBar from './components/search_bar';//don't need file extension as long as it's a .js file
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = '';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); //like videos: data, ES6, can do when key and arg are same name
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and put it on the page(DOM)
ReactDOM.render(<App />, document.querySelector('.container')); //JSX tags to make an instance of App to render to the DOM
