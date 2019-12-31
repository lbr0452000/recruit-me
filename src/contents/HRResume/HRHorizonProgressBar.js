import React, { Component } from 'react';
import styles from './HRHorizonProgressBar.module.scss';

class HRHorizonProgressBar extends Component {
	render() {
		const graphStyle = {
			width: this.props.percentage+"%"
		}
		return (
			<div className="HRHorizonProgressBar">
				
				<div className={styles.title}>{this.props.title}</div>
				<div className={styles.graph}>
					<div className={styles.graph_progress} style={graphStyle}></div>
				</div>
			</div>
		);
  	}
}

export default HRHorizonProgressBar;