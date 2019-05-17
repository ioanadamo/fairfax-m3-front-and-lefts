import React from 'react';
import PreviewName from './PreviewName';
import PreviewJob from './PreviewJob';

class PreviewCard extends React.Component {
	//Esta función getThem recibe un número por props 1,2 o 3 y la convierte en la clase correspondiente
	getTheme(number){
		let theme ;
		if (number==1){
			 theme = 'theme-green'
		}
		else if(number==2){
			 theme = 'theme-red'
		}
		else if (number==3){
			theme = 'theme-blue'
		}
		return theme;
	}
	render() {
		const theme = this.getTheme(this.props.palette);
		return (
			<div className={`preview__card ${theme}`}>
			<div className="deco-rectangle__card" />
			<PreviewName nameSurname="Nombre Apellidos" />

			<PreviewJob job="Front-end Developer" />

			<div className="photo__preview js__profile-image" />

			<ul className="social__card--list">
				<li className="social__icons mobile-icon">
					{' '}
					<a href="" id="mobile-link">
						<svg className="wrap-icon">
							<use href="#ico-mobile" />
						</svg>
					</a>
				</li>

				<li className="social__icons email-icon">
					{' '}
					<a className="email__card">
						<svg className="wrap-icon">
							<use href="#ico-letter" />
						</svg>
					</a>
				</li>

				<li className="social__icons linkedin-icon">
					{' '}
					<a className="linkedin-link" href="" target="_blank">
						<svg className="wrap-icon">
							<use href="#ico-linkedin" />
						</svg>
					</a>
				</li>

				<li className="social__icons github-icon">
					{' '}
					<a className="link-github" href="" target="_blank">
						<svg className="wrap-icon">
							<use href="#ico-github" />
						</svg>
					</a>
				</li>
			</ul>
		</div>
		);
	}
}

export default PreviewCard;




