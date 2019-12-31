import React, { Component } from 'react';
import styles from './HROthers.module.scss';

class HROthers extends Component {
	render() {
		return (
			<div className="HROthers">
				<h3 className={styles.title}>Others</h3>
				<div className={styles.contents}>
					{this.props.contents.map((content, i)=>{
						return(
							<div className={styles.content} key={i}>
								<h4 className={styles.content_title}>{content.title}</h4>
								<div className={styles.content_detail}>{content.subtitle}</div>
								{content.details.map((detail, j)=>
									<div className={styles.content_detail} key={j}>{detail}</div>
								)}
							</div>
						)
					})}
				</div>
			</div>
		);
  	}
}

export default HROthers;