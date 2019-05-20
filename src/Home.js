import React from 'react';
import icoDownload from './images/download.svg';
import { Link } from 'react-router-dom';
import icoDesign from './images/ungroup.svg';
import icoFill from './images/keyboard.svg';
import icoShare from './images/share.svg';
import icoLogoFooter from './images/logo-disena-aventura.jpg';
import icoLogoFooter2 from './images/logo-adalab.png';

class Home extends React.Component {
	render() {
		return (
			<div className="place-items__index">
				<header className="page__header">
					<img
						src={icoDownload}
						className="page-header__image"
						alt="logo Awesome profile-cards"
					/>
				</header>
				<main className="page__main">
					<div className="header_container-text">
						<h1 className="page-main__title">Crea tu tarjeta de visita</h1>

						<p className="page-main__subtitle">
							Crea mejores contactos profesionales de forma fácil y cómoda
						</p>
					</div>
					<div className="main-cont-icons">
						<div className="main-item1-icons">
							<img className="icon" src={icoDesign} alt="" />{' '}
							<span className="text-icons">Diseña</span>
						</div>
						<div className="main-item1-icons">
							<img className="icon" src={icoFill} alt="" />{' '}
							<span className="text-icons">Rellena</span>
						</div>
						<div className="main-item1-icons">
							<img className="icon" src={icoShare} alt="" />{' '}
							<span className="text-icons">Comparte</span>
						</div>
					</div>{' '}
					<Link className="main-button__start" to="/card-maker">
						Comenzar
					</Link>
				</main>
				<footer className="footer__page">
					<div className="footer__flex-wrapper column-center">
						{' '}
						<small className="footer__copyright">
							Awesome profile-cards @2019
						</small>
						<div className="logos">
							<img
								src={icoLogoFooter}
								alt="Logo de Diseña tu aventura"
								className="footer__image--logo"
							/>{' '}
							<a
								className="footer__link"
								href="https://adalab.es/"
								target="blank"
							>
								<img
									src={icoLogoFooter2}
									alt="Logo de Adalab"
									className="footer__image"
								/>
							</a>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Home;
