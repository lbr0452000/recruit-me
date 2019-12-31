import React, { Component } from 'react';
import styles from './HRCareer.module.scss';

class HRCareer extends Component {
	render() {
		return (
			<div className="HRCareer">
				<h3 className={styles.title}>{this.props.title}</h3>
				{this.props.contents.map((careerData, i)=>{
					return(
						<div className={styles.detail} key={i}>
							<h4 className={styles.detail_title}>{careerData.name}</h4>
							<div className={styles.detail_term}>{careerData.term}</div>
							{careerData.details.map((detail, j)=>
								<div className={styles.detail_content} key={j}>{"- "+detail}</div>
							)}
						</div>
					)
				})}
			</div>
		);
  	}
}

export default HRCareer;