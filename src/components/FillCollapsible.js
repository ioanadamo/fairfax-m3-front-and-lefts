import React from "react";
import icoKeyboard from "../images/keyboard.svg";
import icoDownArrow from "../images/down-arrow.svg";

function FillCollapsible(props) {
  return (
    <section className="panel">
      <div className="panel__dropdown">
        <div className="title-image__wrapper">
          <img className="dropdown__icon-section" src={icoKeyboard} alt="" />
          <h2 className="dropdown__title">Rellena</h2>
        </div>
        <img
          className="dropdown__arrow--up"
          id="dropdown__down-arrow--fill"
          src={icoDownArrow}
          alt="Abrir panel rellena"
        />
      </div>
      <fieldset className="panel__fill-form">
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
          <div className="item__info--image-container">
            <input
              type="file"
              className="js__profile-upload-btn item__info hidden__file--button"
              name="photo"
              id="personalImage"
            />
            <button
              type="button"
              className="item__info--button js__profile-trigger"
            >
              Añadir imagen
            </button>
            <div className="js__profile-preview item__info--thumbnail" />
          </div>
        </div>
        <div className="dropdown__item">
          <label className="item__label" htmlFor="phone">
            Teléfono <span className="marker"> *</span>
          </label>
          <input
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
            className="item__info"
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
