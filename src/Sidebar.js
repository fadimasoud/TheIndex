import React, { Component } from 'react';


class Sidebar extends Component {
  render() {
    return (
		<sidebar>
		  <img src="theindex.svg" className="logo" />
		  <section>
		    <h4 className="menu-item active">
		      <a href="#">AUTHORS</a>
		    </h4>
		  </section>
		</sidebar>
		);
  	}
}

export default Sidebar;

