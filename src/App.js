import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import SearchForm from './Components/SearchForm/SearchForm';
import Results from './Components/Results/Results';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      location: '',
      search: false,
      jobresults: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  handleChange(event) {
    event.preventDefault();
    this.setState ({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let results = [];
    axios.get(`/v1/api/jobs/us/search/?app_id=81454df3&app_key=1b381888745be934eede931e700db5f7&results_per_page=30&what=${this.state.title}&where=${this.state.location}&full_time=1`)
    .then(response => {
      results = response.data.results;
      this.setState ({
        jobresults: results,
        search: true
      })
    })
    .catch(error => console.log(error))
  }

  render () {
    return (
      <div className="App">
        <Navigation />
        <SearchForm 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          title = {this.state.title}
          location = {this.state.location}
          />
        {
          this.state.search === true ? 
          <Results 
            jobresults={this.state.jobresults}
            title={this.state.title}
            location={this.state.location}  
          /> : 
          <div></div>
        }
        {/* <SavedJobs /> */}

      </div>
    );
  }
}

export default App;
