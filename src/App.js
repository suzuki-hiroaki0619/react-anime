import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      animes: []
    };
  }

  onClick = async () => {
    const result = await axios.get(
      'http://api.moemoe.tokyo/anime/v1/master/2019/1'
    );

    const animes = result.data.map(anime => {
      return { title: anime.title };
    });

    this.setState({
      animes
    });
  };

  render() {
    const anime_list = this.state.animes.map(anime => {
      return (
        <div class="card col-sm-3 mb-4">
          <div class="card-body">
            <h5 class="card-title">{anime.title}</h5>
            <a href="#" class="btn btn-primary">
              詳細
            </a>
          </div>
        </div>
      );
    });

    return (
      <div className="App container">
        <div class="card mt-5">
          <div class="card-body">
            <form class="form-inline">
              <div class="form-group mr-4">
                <select class="form-control" id="year">
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                </select>
                <span>年</span>
              </div>
              <div class="form-group mr-5">
                <select class="form-control" id="season">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
                <span>シーズン</span>
              </div>

              <button
                type="button"
                class="btn btn-primary"
                onClick={this.onClick}
              >
                検索
              </button>
            </form>
          </div>
        </div>

      
        <div class="mt-5 row">{anime_list}</div>
      </div>
    );
  }
}

export default App;
