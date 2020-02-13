import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//app Components
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoGallery from './components/PhotoGallery';

console.log(apiKey);

class App extends Component {

  constructor(){
    super();
    this.state ={
      dogs: [],
      cats: [],
      mountains: [],
      beaches: [],
      search:[],
      searchQuery: '',
      loading : true,
     
    };
  }
  componentDidMount(){
    this.dogsSearch();
    this.catsSearch();
    this.mountainsSearch();
    this.beachesSearch();
  }

  performSearch = (query) => {
    this.setState({
     loading: true

    });
    console.log(query);
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&per_page=24&format=json&nojsoncallback=1`)
   
    .then(response =>{
      this.setState({
        search: response.data.photos.photo,
        searchQuery : query,
        loading: false,
      });
    })
  
    .catch(error => {
      console.log('Error fetching and parsing data.', error)
    });
      
  }
  //dogsSearch
  dogsSearch = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&safe_search=&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        dogs : response.data.photos.photo,
        loading: false

      });
    })
    .catch(error =>{
      console.log('Error fetching and parsing data', error)
    })
  }

  //catsSearch
  catsSearch = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&safe_search=&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        cats : response.data.photos.photo,
        loading: false

      });
    })
    .catch(error =>{
      console.log('Error fetching and parsing data', error)
    })
  }

  //mountainsSearch
  mountainsSearch = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=mountains&safe_search=&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        mountains : response.data.photos.photo,
        loading: false

      });
    })
    .catch(error =>{
      console.log('Error fetching and parsing data', error)
    })
  }

  //beachesSearch
  beachesSearch = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=beaches&safe_search=&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        beaches : response.data.photos.photo,
        loading: false

      });
    })
    .catch(error =>{
      console.log('Error fetching and parsing data', error)
    })
  }
    
  
  render(){
   
    return(
    <BrowserRouter>
      <div className ="container">
        
        < Search onSearch={this.performSearch}/>
        < Nav onSearch={this.performSearch}/>
        <Switch>
          <Route exact path="/"
            render={() => <PhotoGallery results ={this.state.dogs} title={"dogs"} />}/>
          <Route exact path="/cats"
            render={() => <PhotoGallery results ={this.state.cats} title={"cats"} />}/>
          <Route exact path="/mountains"
            render={() => <PhotoGallery results ={this.state.mountains} title={"mountains"} />}/>
          <Route exact path="/beaches"
            render={() => <PhotoGallery results ={this.state.beaches} title={"beaches"} />}/>
          <Route exact path="/search/:searchQuery"
            render={() => <PhotoGallery results ={this.state.search} title={"this.state.searchQuery"} />}/>
        </Switch>
       
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
