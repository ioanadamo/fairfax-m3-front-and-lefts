import React from 'react';

class PreviewEmail extends React.Component {
	render() {
		return (
			<li
				className={
					this.props.email
						? `social__icons email-icon addBoxShadow__IfInputIsFIlled`
						: 'social__icons email-icon '
				}
			>
				<a
					href={this.props.email ? `mailto:${this.props.email}` : ''}
					className="email__card"
				>
					<svg className="wrap-icon">
						<use href="#ico-letter" />
					</svg>
				</a>
			</li>
		);
	}
}

export default PreviewEmail;
