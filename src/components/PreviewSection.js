import React from 'react';
import icoTrash from '../images/trash.svg';
import PreviewName from './PreviewName';
import PreviewJob from './PreviewJob';

class PreviewSection extends React.Component {
	constructor(props){
		super(props);
		// this.state = {
		// 	palette:this.props.palette,
		// }
		
	}
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
			<section className="preview__section grid-item__card bgc-color-green">
				<div className="preview__section--container">
					<button className="reset__button">
						<img className="trash-icon" src={icoTrash} alt="imagen reset" />
						Reset
					</button>
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
				</div>
			</section>
		);
	}
}

export default PreviewSection;
