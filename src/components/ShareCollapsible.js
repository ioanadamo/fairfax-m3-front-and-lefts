import React from 'react';
import icoDownArrow from '../images/down-arrow.svg';
import icoIdCard from '../images/id-card.svg';
import icoShare from '../images/share.svg';
import icoTwitter from '../images/twitter.svg';

function ShareCollapsible(props) {
	// isCollapsibleOpen={this.props.isCollapsibleOpen}
	// collapsibleAction={this.props.collapsibleAction}
	return (
		<React.Fragment>
			<section className="panel">
				<div
					className="panel__dropdown"
					data-id="shareid"
					onClick={props.collapsibleAction}
				>
					<div className="title-image__wrapper">
						<img className="dropdown__icon-section" src={icoShare} alt="" />
						<h2 className="dropdown__title">Comparte</h2>
					</div>
					<img
						className={`${
							props.isCollapsibleOpen === 'shareid'
								? 'dropdown__arrow--up'
								: 'dropdown__arrow--down'
						}`}
						id="dropdown__down-arrow--share"
						src={icoDownArrow}
						alt="Abrir panel compartir"
					/>
				</div>
				<div
					className={`align_share ${
						props.isCollapsibleOpen === 'shareid' ? '' : 'panel--close'
					}`}
				>
					<button
						onClick={props.sendRequest}
						className="btn_share"
						type="submit"
					>
						<img
							className="icon__id-card"
							src={icoIdCard}
							alt="Crear tarjeta"
						/>
						Crear Tarjeta
					</button>
				</div>
			</section>
			<section
				className={
					props.linkProvided
						? `align_share align_share_text panel-design panel__twitter`
						: `align_share align_share_text panel-design panel__twitter panel--close`
				}
			>
				<p className="card-create">La tarjeta ha sido creada</p>
				<a className="card-link" target="_blank" href={props.linkProvided}>
					{props.linkProvided}
				</a>
				<div className="align_share">
					{' '}
					<a
						className="twitter-share-button"
						href='https://twitter.com/intent/tweet?text= Mirad%20que%20tarjeta%20más%20chachi%20he%20creado%20con%20la%20aplicación%20"Awesome%20Profile-cards"&url= '
						data-size="large"
						target="_blank"
					>
						<img
							className="icon__twitter"
							src={icoTwitter}
							alt="compartir en Twitter"
						/>
						Compartir en Twitter
					</a>
				</div>
			</section>
		</React.Fragment>
	);
}

export default ShareCollapsible;
