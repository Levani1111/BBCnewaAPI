import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props) {
        super(props);
         this.state = {
            news: [],
        };
    }
    componentDidMount() {
    const url = 
  
    'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ed71b36e32e541b6af7691438d3b68d8';
    
      fetch(url)
       .then((response) => {
           return response.json();
      
      })
      .then((data) => {
          this.setState({
              news: data.articles
          })
      })
      .catch((error) => console.log(error));
    }

    renderItems() {
        return this.state.news.map((item) => (
          <NewSingle data={this.state.data} key={item.url} item={item} />
        ));
    }


    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        );
    }
}

export default News;