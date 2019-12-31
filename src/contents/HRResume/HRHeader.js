import React, { Component } from 'react';
import styles from './HRHeader.module.scss';
import profileImage from './img/Profile.jpeg'

class HRHeader extends Component {
	render() {
		return (
			<div className="HRHeader">
				<h1 className={styles.name}>{this.props.name}</h1>
				<img className={styles.image} src={profileImage} alt="프로필 사진"></img>
			</div>
		);
  	}
}

export default HRHeader;