import React, { Component } from 'react';
import authors from './data.js';
console.log(authors);
class App extends Component {
  render() {
    return (
      <div>
		<div id="app" className="container-fluid">
		    <div className="row">
		      <div className="col-2">
		        <sidebar>
		          <img src="theindex.svg" className="logo" />
		          <section>
		            <h4 className="menu-item active">
		              <a href="#">AUTHORS</a>
		            </h4>
		          </section>
		        </sidebar>
		      </div>
		      <div className="content col-10">
		        <div className="authors">
		          <h3>Authors</h3>
		          <div className="row">
		          {authors.map((author)=>{
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
		        	)})}
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
