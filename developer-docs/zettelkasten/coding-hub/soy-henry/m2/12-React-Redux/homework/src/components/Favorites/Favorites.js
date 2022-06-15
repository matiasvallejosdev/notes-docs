import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import "./Favorites.css";
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {this.props.favs.map((movie) => (
            <li key={movie.imdbID}>
              <span>{movie.Title}</span>{" "}
              <button
                onClick={() => this.props.removeMovieFavorite(movie.imdbID)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ favs: state.moviesFavourites }), {
  removeMovieFavorite,
})(ConnectedList);
