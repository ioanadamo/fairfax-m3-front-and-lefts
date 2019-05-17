import React from 'react';

class PreviewEmail extends React.Component {
	render() {
		return (
			<li className="social__icons email-icon">
				{' '}
				<a className="email__card">
					<svg className="wrap-icon">
						<use href="#ico-letter" />
					</svg>
				</a>
			</li>
		);
	}
}

export default PreviewEmail;
