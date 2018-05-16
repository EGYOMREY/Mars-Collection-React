import React, { Component } from 'react';

import { connect } from 'react-redux';

class MyPictures extends Component {

	render () {
		console.log(this.props.likedPictures);
		return (
			<div>
				<h1>MY PICTURES</h1>
			</div>
			);
	}
}


const mapStateToProps = state => {
  return {
    likedPictures: state.likedPictures
  };
}



export default connect(mapStateToProps)(MyPictures);