import React from 'react';
import PreviewName from './PreviewName';
import PreviewJob from './PreviewJob';
import PreviewLinkedin from './PreviewLinkedin';

class PreviewCard extends React.Component {
	render() {
		return (
			<div className="preview__card">
				<div className="deco-rectangle__card" />
				<PreviewName nameSurname={this.props.dataUser.name} />

				<PreviewJob job={this.props.dataUser.job} />

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

					<PreviewLinkedin linkedin={this.props.dataUser.linkedin} />

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
