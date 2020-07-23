import React, { Component } from 'react';
import News from './News/News';
import "@patternfly/react-core/dist/styles/base.css";


import './App.css';

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: "top-headlines",
        query: "surces=bbc-news",
      },
      // news2: {
      //   type: "everything",
      //   query: "domains=wsj.com,nytimes.com"
      // },
    };
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          BBC News <span>Articles</span>
        </h1>
      </header>
      <News news={this.state.news1} />
      {/* <News news={this.state.news2} /> */}
    </div>
  );
}
}

export default App;
