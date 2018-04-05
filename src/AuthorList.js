import React, { Component } from 'react';
// import authors from './data.js';

class AuthorList extends Component {
  render() {
    return ( 
    	!this.props.loading ?    	(
			this.props.authors.map((author)=>{
	          	return (
		            <div className="col-4">
		              <a href="#" className="card">
		                <div className="image">
		                  <img className="card-img-top img-fluid" src={author.imageUrl} />
		                </div>
		                <div className="card-body">
		                  <h5 className="card-title">
		                    <span>{author.first_name} {author.last_name}</span>
		                  </h5>
		                  <small className="card-text">{author.books.length}</small>
		                </div>
		              </a>
		            </div>
	        	)})
    	):
    	(
    	<div className="col-4">
    		<a href="#" className="card">
		              //you will not wait for too long <h1 asdasdasd salkdhalskhdajshdaksjhdkjasdhkjasgdkajshgdjhasgdjhasgdjhgdahjsdgjashgdjhasgd/> 
		                  
		              </a>
		       	</div>
	)

		);
  	}
}

export default AuthorList;
