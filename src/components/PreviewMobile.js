import React, { Component } from 'react';

class PreviewMobile extends React.Component {
	render() {
		return (
			<li className="social__icons mobile-icon">
				{' '}
				<a
					href={this.props.phone ? `tel:${this.props.phone}` : ''}
					id="mobile-link"
				>
					<svg className="wrap-icon">
						<use href="#ico-mobile" />
					</svg>
				</a>
			</li>
		);
	}
}

export default PreviewMobile;
