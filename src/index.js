import _ from 'lodash';
import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyC4bhdhI4vnJsoySL11lA9y3Y_I_KYy6RA';

//Create new component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('react tutorials');
  }

videoSearch(term){      
    YTSearch({key: API_KEY, term: term } , (videos) => {
      this.setState({
         videos: videos ,
         selectedVideo: videos[0]
       });
    });
}

  render() {
    const videoSearch = _.debounce((term)=>{ this.videoSearch(term)}, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo =>  this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

//Render component in page (in DOM)
ReactDOM.render(<App />, document.querySelector('.container') );