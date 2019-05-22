import React from 'react';
import PropTypes from 'prop-types';

class PreviewLinkedin extends React.Component {
	render() {
		return (
			<li
				className={
					this.props.linkedin
						? `social__icons linkedin-icon addBoxShadow__IfInputIsFIlled`
						: 'social__icons linkedin-icon'
				}
			>
				<a
					className="linkedin-link"
					href={
						this.props.linkedin
							? `https://www.linkedin.com/in/${this.props.linkedin}`
							: ''
					}
					target=" blank"
				>
					<svg className="wrap-icon">
						<use href="#ico-linkedin" />
					</svg>
				</a>
			</li>
		);
	}
}

PreviewLinkedin.propTypes = {
	linkedin: PropTypes.string.isRequired
};
export default PreviewLinkedin;
