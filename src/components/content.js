import React, { Component } from 'react';
import { profile, education, projects, experience } from '../profile.json';

class Content extends Component {
	render() {

		return (
			<div className={this.props.className}>
				<Section sectionName="Profile">
					{profile}
				</Section>
				<Section sectionName="Education">
					{education.map((val, index) => {
						return (
							<Item key={index} details={val}>
								<Education qualifications={val.qualifications} />
							</Item>
						);
					})}
				</Section>
				<Section sectionName="Projects">
					{projects.map((val, index) => {
						return (
							<Item key={index} details={val} />
						)
					})}
				</Section>
				<Section sectionName="Experience">
					{experience.map((val, index) => {
						return <Item key={index} details={val} />
					})}
				</Section>
			</div>
		);
	}
}

const Section = ({children, sectionName}) => {
	return (
		<div className="section">
			<div className="section-name">
				{sectionName}
			</div>
			<div className="section-content">
				{children}
			</div>
		</div>
	);
}

const Item = ({children, details}) => {
	const heading = details.url ?
					<h6><a target="_blank" rel="noopener noreferrer" href={details.url}>{details.name}</a></h6> :
					<h6>{details.name}</h6>;

	let dateRange = undefined;
	if(details.start_date || details.end_date) {
		const startDate = formatDate(details.start_date);
		const endDate = formatDate(details.end_date);
		dateRange = <p>{startDate} - {endDate}</p>;
	}
	const description = details.description ? <div className="item-description">{details.description}</div> : undefined;

	return (
		<div className="item">
			<div className="item-details">
				{heading}
				<p className="position">{details.position}</p>
				{dateRange}
			</div>
			{description}
			<div className="item-data">
				{children}
			</div>
		</div>
	);
}

const Education = ({qualifications}) => {
	const type = Object.keys(qualifications);
	return (
		<div className="qualifications">
			{type.map((val, index) => {
				return (
					<div key={index} className="qualification">
						<h6 className="qualification-type">{val}</h6>
						<Qualifications data={qualifications[val]} />
					</div>
				);
			})}
		</div>
	);
}

const Qualifications = ({data}) => {
	return (
		<ul className="qualification-list">
			{data.map((val, index) => {
				return <li key={index}><b>{val.subject}</b> - {val.grade}</li>;
			})}
		</ul>
	);
}

const formatDate = (date) => {
	if(date) {
		let options = {month: 'long', year: 'numeric'};
		return new Date(date).toLocaleDateString('en-GB', options);
	}
	return "Present";
}


export default Content;