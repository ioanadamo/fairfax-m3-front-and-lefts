import React from 'react';
import PreviewName from './PreviewName';
import PreviewJob from './PreviewJob';
import PreviewMobile from './PreviewMobile';
import PreviewLinkedin from './PreviewLinkedin';
import PreviewGithub from './PreviewGithub';
import PreviewEmail from './PreviewEmail';

class PreviewCard extends React.Component {
	//Esta función getThem recibe un número por props 1,2 o 3 y la convierte en la clase correspondiente
	getTheme(number) {
		let theme;
		if (number === '1') {
			theme = 'theme-green';
		} else if (number === '2') {
			theme = 'theme-red';
		} else if (number == '3') {
			theme = 'theme-blue';
		}
		return theme;
	}
	render() {
		const theme = this.getTheme(this.props.dataUser.palette);
		return (
			<div className={`preview__card ${theme}`}>
				<div className="deco-rectangle__card" />
				<PreviewName nameSurname={this.props.dataUser.name} />

				<PreviewJob job={this.props.dataUser.job} />

				<div className="photo__preview" style={{backgroundImage:`url(${this.props.dataUser.photo})`}}/>

				<ul className="social__card--list">
					<PreviewMobile phone={this.props.dataUser.phone} />
					<PreviewEmail email={this.props.dataUser.email} />
					<PreviewLinkedin linkedin={this.props.dataUser.linkedin} />
					<PreviewGithub githubUser={this.props.dataUser.github} />
				</ul>
			</div>
		);
	}
}

export default PreviewCard;
