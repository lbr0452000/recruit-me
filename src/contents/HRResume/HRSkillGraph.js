import React, { Component } from 'react';
import './HRSkillGraph.css'
import styles from './HRSkillGraph.module.scss';

import HRHorizonProgressBar from './HRHorizonProgressBar'

class HRSkillGraph extends Component {
	render() {
		return (
			<div className="HRSkillGraph">
				<h3 className={styles.title}>{this.props.skillName}</h3>
				
				{this.props.skills.map((skill, i)=>{
					return(
						<div className={styles.skill} key={i}>
							
							<h5 className={styles.skill_title}>{skill.name}</h5>
							<HRHorizonProgressBar title={skill.comment} percentage={skill.graph} />
							
							
						</div>
					)
				})}
				
				
				
				
			</div>
		);
  	}
}

export default HRSkillGraph;