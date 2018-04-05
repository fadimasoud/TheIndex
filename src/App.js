import React, { Component } from 'react';
import Sidebar from './Sidebar';
import AuthorList from './AuthorList';
// import authors from './data.js';
import axios from 'axios';

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
    authors: [],
    loading: true
    };
    
	
  }
	componentDidMount() {
    
    	axios.get('https://the-index-api.herokuapp.com/api/authors/')
		  .then(res => res.data)
		  .then(data => this.setState({authors:data, loading:false}))
		  .catch(err => this.setState({loading:true}))
    

  }
  render() {
    return (
      <div>
		<div id="app" className="container-fluid">
		    <div className="row">
		      <div className="col-2">
		        <Sidebar />
		      </div>
		      
		      <div className="content col-10">
		      
		        <div className="authors">
		          <h3>Authors</h3>
		          <div className="row">
		          <AuthorList authors={this.state.authors} loading={this.state.loading}/>		          
		      	  </div>
		      	</div>
			 </div>
			</div>
		</div>
      </div>
    );
  }
}



export default App;
