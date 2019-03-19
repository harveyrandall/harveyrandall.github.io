import React, { Component } from 'react';
import { name, description, location, contact } from "../profile.json";

import personalImage from "../images/IMG_9939.png";

class Sidebar extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<div className="side-info">
					<Image
						url={personalImage}
						alt={name}
					/>
					<Title
						name={name}
					/>
					<Description
						className="description"
						text={description}
					/>
					<Separator />
					<Footer icons={contact}/>
				</div>
			</div>
		)
	}
}

const Separator = () => {
	return (
		<div className="sep"></div>
	);
}

const Title = ({className, name}) => {
	return (
		<h2>{name}</h2>
	);
}

const Image = ({className, url, alt}) => {
	return (
		<img src={url} alt={alt} />
	);
}

const Description = ({className, text}) => {
	return (
		<div className={className}>
			<p>{text}</p>
			<Separator />
			<small className="location">
				<Icon name="fas fa-map-marker-alt" />
				{location}
			</small>
		</div>
	);
}

const Footer = ({icons}) => {
	return (
		<div className="side-footer">
			{contact.map(function(val){
				return <Icon key={val.platform} url={val.url} name={val.classes} />
			})}
		</div>
	);
}

const Icon = ({url, name}) => {
	return (
		<a href={url}
			className="contact-icon"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i className={name}></i>
		</a>
	);
}


export default Sidebar;