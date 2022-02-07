import '../App.css';
import { Component } from 'react';
import { Search } from '../Search';
import { Ship } from '../Ship'
import faker from 'faker';


export class Ships extends Component {
  state = {
    status: 'initial',// initial, loading, success, error
    error: null,
    data: null,
    searchField: '',
  }
  
  handleFetchData = (url) => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => this.setState({
        status: 'success',
        error: null,
        data: data,
        searchField: '',
      }))
      .catch(e => this.setState({
        status: 'error',
        error: e.message,
        data: null,
        searchField: '',
      }))
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.handleFetchData(`https://swapi.dev/api/starships/?search=${this.state.searchField}`)
  }
  
  handleSearchInput = (e) => {
    const value = e.target.value.trim() 
    this.setState({
      searchField: value
    })
  }

  componentDidMount() {
    this.handleFetchData('https://swapi.dev/api/starships/')
  }

  render() {
    const { status, error, data } = this.state
    return (
      <div className="outer-container">
        <Search 
            onSubmit={ this.handleSubmit }
            onSearch={ this.handleSearchInput }
            mainState={ this.state } 
          />
        { status === 'loading'  || status === 'initial' 
        ? <div className="loading-bar">
          Loading...
          Please wait!!!
        </div> 
        : <div className="data-container">
          { error === null ? (
            <div className='data'>{ 
              data.results.map(el => (
                <div className="card" key={ faker.datatype.uuid() }>
                    <Ship data={ el }/>
                </div>
              ))  
            }</div>
          ) : (
            <span>Fetch error!!</span>
          )
          }
        </div>
        }
      </div>
    )
  }
}
