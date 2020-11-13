import React from 'react';
import RatingInput from './rating_input';
import MovieList from './movie_list';

class App extends React.Component{

  constructor(props) {
      super(props);
      this.state={movie:[]};
    }

    save() {
      var movie = [...this.state.movie];
      movie.push(this.newText.value);
      this.setState({movie});
    }

  render(){
    return (
      <div className="app__container">
        <div className="app__form">
          <header className="header">
            <h1>Screen it</h1>
          </header>
          <form className="form" className="form">
            <div className="form__input">
              <label htmlFor="movieName">Name</label>
              <input
                ref={(ip) => {this.newText = ip}}
                type="text"
                id="movieName"
                name="movieName"
                placeholder="Name of the movie"
                required
              />
            </div>
            <div className="form__input">
              <label htmlFor="movieCat">Category</label>
              <div className="select__container">
                <select id="movieCat" name="movieCat">
                  <option value="">Select a category</option>
                  <option value="action-adv">Action/Adventure</option>
                  <option value="comedy">Comedy</option>
                  <option value="drama">Drama</option>
                  <option value="fantasy-sci-fi">Fantasy/SciFi</option>
                  <option value="family">Family</option>
                </select>
              </div>
            </div>
            <RatingInput />
            <button
              className="btn"
              type="button"
              onClick={this.save.bind(this)}
            >
              Add Movie
            </button>
          </form>
        </div>
        <ul className="list">
          {this.state.movie.map(function(movie) {
              return (
                <li className="list__item">
                  <div className="movie__initials init--sm">

                  </div>
                  <div className="movie__title">
                    <h2>{movie}</h2>
                    <p className="caption">Comedy</p>
                  </div>
                  <div className="movie__rating">
                    <svg className="star--filled" x="0px" y="0px" viewBox="0 0 32 32">
                      <path d="M13.7,2.6c0.9-2,3.7-2,4.6,0l2.5,5.9c0.4,0.8,1.1,1.4,2.1,1.5l6.4,0.6c2.2,0.2,3.1,2.9,1.4,4.4l-4.8,4.2
                    c-0.7,0.6-1,1.5-0.8,2.4l1.4,6.3c0.5,2.1-1.8,3.8-3.7,2.7l-5.5-3.3c-0.8-0.5-1.8-0.5-2.5,0l-5.5,3.3C7.3,31.7,5,30,5.5,27.9l1.4-6.3
                    c0.2-0.9-0.1-1.8-0.8-2.4l-4.8-4.2c-1.6-1.4-0.8-4.2,1.4-4.4L9.1,10c0.9-0.1,1.7-0.7,2.1-1.5L13.7,2.6z"/>
                    </svg>
                    <svg className="star--filled" x="0px" y="0px" viewBox="0 0 32 32">
                      <path d="M13.7,2.6c0.9-2,3.7-2,4.6,0l2.5,5.9c0.4,0.8,1.1,1.4,2.1,1.5l6.4,0.6c2.2,0.2,3.1,2.9,1.4,4.4l-4.8,4.2
                    c-0.7,0.6-1,1.5-0.8,2.4l1.4,6.3c0.5,2.1-1.8,3.8-3.7,2.7l-5.5-3.3c-0.8-0.5-1.8-0.5-2.5,0l-5.5,3.3C7.3,31.7,5,30,5.5,27.9l1.4-6.3
                    c0.2-0.9-0.1-1.8-0.8-2.4l-4.8-4.2c-1.6-1.4-0.8-4.2,1.4-4.4L9.1,10c0.9-0.1,1.7-0.7,2.1-1.5L13.7,2.6z"/>
                    </svg>
                    <svg className="star--filled" x="0px" y="0px" viewBox="0 0 32 32">
                      <path d="M13.7,2.6c0.9-2,3.7-2,4.6,0l2.5,5.9c0.4,0.8,1.1,1.4,2.1,1.5l6.4,0.6c2.2,0.2,3.1,2.9,1.4,4.4l-4.8,4.2
                    c-0.7,0.6-1,1.5-0.8,2.4l1.4,6.3c0.5,2.1-1.8,3.8-3.7,2.7l-5.5-3.3c-0.8-0.5-1.8-0.5-2.5,0l-5.5,3.3C7.3,31.7,5,30,5.5,27.9l1.4-6.3
                    c0.2-0.9-0.1-1.8-0.8-2.4l-4.8-4.2c-1.6-1.4-0.8-4.2,1.4-4.4L9.1,10c0.9-0.1,1.7-0.7,2.1-1.5L13.7,2.6z"/>
                    </svg>
                    <svg className="star--filled" x="0px" y="0px" viewBox="0 0 32 32">
                      <path d="M13.7,2.6c0.9-2,3.7-2,4.6,0l2.5,5.9c0.4,0.8,1.1,1.4,2.1,1.5l6.4,0.6c2.2,0.2,3.1,2.9,1.4,4.4l-4.8,4.2
                    c-0.7,0.6-1,1.5-0.8,2.4l1.4,6.3c0.5,2.1-1.8,3.8-3.7,2.7l-5.5-3.3c-0.8-0.5-1.8-0.5-2.5,0l-5.5,3.3C7.3,31.7,5,30,5.5,27.9l1.4-6.3
                    c0.2-0.9-0.1-1.8-0.8-2.4l-4.8-4.2c-1.6-1.4-0.8-4.2,1.4-4.4L9.1,10c0.9-0.1,1.7-0.7,2.1-1.5L13.7,2.6z"/>
                    </svg>
                    <svg className="star--filled" x="0px" y="0px" viewBox="0 0 32 32">
                      <path d="M13.7,2.6c0.9-2,3.7-2,4.6,0l2.5,5.9c0.4,0.8,1.1,1.4,2.1,1.5l6.4,0.6c2.2,0.2,3.1,2.9,1.4,4.4l-4.8,4.2
                    c-0.7,0.6-1,1.5-0.8,2.4l1.4,6.3c0.5,2.1-1.8,3.8-3.7,2.7l-5.5-3.3c-0.8-0.5-1.8-0.5-2.5,0l-5.5,3.3C7.3,31.7,5,30,5.5,27.9l1.4-6.3
                    c0.2-0.9-0.1-1.8-0.8-2.4l-4.8-4.2c-1.6-1.4-0.8-4.2,1.4-4.4L9.1,10c0.9-0.1,1.7-0.7,2.1-1.5L13.7,2.6z"/>
                    </svg>
                  </div>
                </li>
              );
          })}
          <MovieList />
        </ul>
      </div>
    )
  }
};

export default App;
