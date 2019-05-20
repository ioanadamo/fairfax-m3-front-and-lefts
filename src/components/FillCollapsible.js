import React from 'react';
import GetPhoto from './InputFile';
import icoKeyboard from '../images/keyboard.svg';
import icoDownArrow from '../images/down-arrow.svg';

function FillCollapsible(props) {
	// isCollapsibleOpen={this.props.isCollapsibleOpen}
	// collapsibleAction={this.props.collapsibleAction}
	return (
		<section className="panel">
			<div className="panel__dropdown" data-id='fillid' onClick={props.collapsibleAction}>
				<div className="title-image__wrapper">
					<img className="dropdown__icon-section" src={icoKeyboard} alt="" />
					<h2 className="dropdown__title">Rellena</h2>
				</div>
				<img
					className={`${
						props.isCollapsibleOpen === "fillid"
						  ? "dropdown__arrow--up"
						  : "dropdown__arrow--down"
					  }`}
					id="dropdown__down-arrow--fill"
					src={icoDownArrow}
					alt="Abrir panel rellena"
				/>
			</div>
			<fieldset className={`panel__fill-form ${props.isCollapsibleOpen === 'fillid' ? '' : 'panel--close'}`}>
				<div className="dropdown__item">
					<label className="item__label" htmlFor="name">
						Nombre completo <span className="marker"> *</span>
					</label>
					<input
						onChange={props.actionToPerform}
						className="item__info"
						value={props.dataUser.name}
						type="text"
						id="fullName"
						data-id="card-name"
						placeholder="Monster Terribilus"
						name="name"
						required
					/>
				</div>
				<div className="dropdown__item">
					<label className="item__label" htmlFor="job">
						Puesto <span className="marker"> *</span>
					</label>
					<input
						onChange={props.actionToPerform}
						className="item__info"
						value={props.dataUser.job}
						type="text"
						id="rol"
						data-id="card-job"
						placeholder="Front-end"
						name="job"
						required
					/>
				</div>
				<div className="dropdown__item">
					<label className="item__label" htmlFor="photo">
						Imagen de perfil
					</label>
					<GetPhoto
						photo={props.dataUser.photo}
						updatePhoto={props.updatePhoto}
						isPhotoDefault={props.isPhotoDefault}
					/>
				</div>
				<div className="dropdown__item">
					<label className="item__label" htmlFor="phone">
						Teléfono <span className="marker"> *</span>
					</label>
					<input
						onChange={props.actionToPerform}
						value={props.dataUser.phone}
						className="item__info"
						type="tel"
						id="phoneNumber"
						placeholder="123456789"
						maxLength="9"
						name="phone"
						pattern="^\d{3}\d{3}\d{3}$"
						title="ej: 123456789"
						required
					/>
				</div>
				<div className="dropdown__item">
					<label className="item__label" htmlFor="email">
						Email <span className="marker"> *</span>
					</label>
					<input
						onChange={props.actionToPerform}
						value={props.dataUser.email}
						className="item__info"
						type="email"
						id="email"
						placeholder="dontBeScared@gmail.com"
						name="email"
						required
					/>
				</div>
				<div className="dropdown__item">
					<label className="item__label" htmlFor="linkedin">
						Linkedin
					</label>
					<input
						onChange={props.actionToPerform}
						value={props.dataUser.linkedin}
						className="item__info"
						type="url"
						id="linkedin"
						placeholder="linkedin.com/monsterYey"
						name="linkedin"
					/>
				</div>
				<div className="dropdown__item">
					<label className="item__label" htmlFor="github">
						GitHub
					</label>
					<input
						onChange={props.actionToPerform}
						className="item__info"
						value={props.dataUser.github}
						type="text"
						id="github"
						placeholder="monsterYey"
						name="github"
					/>
				</div>
			</fieldset>
		</section>
	);
}

export default FillCollapsible;
