import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = [];
    const pages = [1, 2, 3];
    for (let page of pages) {
      let imgs = await unsplash.get('/search/photos', {
        params: { query: term, page: page }
      });

      response.push(...imgs.data.results);
    }
    // const response = await unsplash.get('/search/photos', {
    //   params: { query: term, page: page }
    // });

    this.setState({ images: response });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
