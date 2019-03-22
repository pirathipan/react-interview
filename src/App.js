import React, { Component } from 'react';

import Card from './components/Card';
import Select from "./components/Select";

// import Filter from './components/Filter';
import './App.css'

import { movies$ } from './app/movies'
class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movies: [],
      categories: [],
      selectedCategories: []
    }
    this.deleteHandler = this.deleteHandler.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  componentDidMount () {
    movies$.then(data => {
      this.setState({
        movies: data,
        categories: [...new Set(data.map(entry=>entry.category)).values()]
      })
    })
  }

  deleteHandler (id) {
    this.setState({
      movies: this.state.movies.filter(movie => movie.id !== id)
    })
  }

  onChangeHandler(values)
  {
    this.setState({
      selectedCategories: values
    })
  }

  render () {
    return (
      <div className='container row'>
        <h1>React Interview</h1>
        <div class="blocSelect">
          <Select onChange={this.onChangeHandler} categories={this.state.categories} ></Select>
        </div>
        <div className='row  flex-container blocLister'>
          {this.state.movies.filter((movie)=>{

            return this.state.selectedCategories.includes(movie.category) || (this.state.selectedCategories.length === 0)

          }).map(movie => {
            return (
              <div className='col'>
                <Card
                  onDelete={this.deleteHandler}
                  key={movie.id}
                  {...movie}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App
