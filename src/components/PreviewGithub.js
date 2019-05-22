import React from 'react';
import PropTypes from 'prop-types';

class PreviewGithub extends React.Component {
	render() {
		return (
			<li
				className={
					this.props.githubUser
						? `social__icons github-icon addBoxShadow__IfInputIsFIlled`
						: 'social__icons github-icon '
				}
			>
				<a
					className="link-github"
					href={
						this.props.githubUser
							? `https://github.com/${this.props.githubUser}`
							: ''
					}
					target="_blank"
				>
					<svg className="wrap-icon">
						<use href="#ico-github" />
					</svg>
				</a>
			</li>
		);
	}
}

PreviewGithub.propTypes = {
	githubUser: PropTypes.string.isRequired
};

export default PreviewGithub;
