import React from 'react';
import icoDownArrow from '../images/down-arrow.svg';
import icoIdCard from '../images/id-card.svg';
import icoShare from '../images/share.svg';
import TwitterButton from './TwitterButton';
import Loader from './Loader';

function ShareCollapsible(props) {
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
						disabled={props.isButtonClicked}
						onClick={props.sendRequest}
						className={`btn_share ${props.isButtonClicked ? 'btn_share--disabled' : ''}`}
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
			<Loader isLoading={props.isLoading}/>
			<section
				className="align_share align_share_text panel-design panel__twitter"
			>
			
				<TwitterButton linkProvided={props.linkProvided}/>
			</section>
		</React.Fragment>
	);
}

export default ShareCollapsible;
