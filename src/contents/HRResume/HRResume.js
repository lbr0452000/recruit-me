import React, { Component } from 'react';
import './HRResume.css'
import HRHeader from './HRHeader';
import HRContacts from './HRContacts';
import HRSkillGraph from './HRSkillGraph';
import HRCareer from './HRCareer';
import HROthers from './HROthers';

class HRResume extends Component {
	render() {
		return (
			<div className="HRResume">
				<HRHeader name={this.props.info.name}/>
				<div className="HRResumeContents">
					<div className="HRResumeContents-left">
						<HRContacts contacts={this.props.info.contacts}></HRContacts>
						<HRSkillGraph skillName="Languages" skills={this.props.info.languages}></HRSkillGraph>
						<HRSkillGraph skillName="Skills" skills={this.props.info.skills}></HRSkillGraph>
					</div>
					<div className="HRResumeContents-right">
						<HRCareer title="Education" contents={this.props.info.education}/>
						<HRCareer title="Careers" contents={this.props.info.careers}/>
						<HRCareer title="Projects" contents={this.props.info.projects}/>
					</div>
				</div>
				<div className="HRResumeContents-bottom">
					<HROthers contents={this.props.info.others}/>
				</div>
			</div>
		);
  	}
}

export default HRResume;