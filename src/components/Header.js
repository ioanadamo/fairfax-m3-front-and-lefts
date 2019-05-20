import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render() {
		return (
			<header className="app-header">
				<div className="column-center">
					<h1>
						<Link to="/" className="link-home">
							<img
								className="app-header__logo"
								src={this.props.logoSrc}
								alt="Awesome profile cards"
							/>
						</Link>
					</h1>
				</div>
			</header>
		);
	}
}

Header.propTypes = {
	link: PropTypes.string.isRequired,
	logoSrc: PropTypes.string.isRequired
};

export default Header;
