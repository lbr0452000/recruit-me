import React, { Component } from 'react';
import styles from './HRContacts.module.scss';

class HRContacts extends Component {
	render() {
		return (
			<div className="HRContacts">
				<h3 className={styles.title}>Contacts</h3>
				{this.props.contacts.map((contact, i)=>{
					return(
						<div className={styles.contact} key={i}>
							<h5 className={styles.contactTitle}>
								{contact.type==="Email" ? <img className={styles.contactIcon} src="https://image.flaticon.com/icons/png/512/181/181535.png" alt="contact icon" /> :undefined}
								{contact.type==="Github" ? <img className={styles.contactIcon} src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="contact icon" /> :undefined}
								<font>{contact.type}</font></h5>
							<div className={styles.contactContent}>{contact.address}</div>
						</div>
					)
				})}
			</div>
		);
  	}
}

export default HRContacts;