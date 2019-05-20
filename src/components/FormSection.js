import React from "react";
import icoIdCard from "../images/id-card.svg";
import icoShare from "../images/share.svg";
import icoTwitter from "../images/twitter.svg";
import icoDownArrow from "../images/down-arrow.svg";
import Palettes from "./Palettes";
import FillCollapsible from "./FillCollapsible";

class FormSection extends React.Component {
  render() {
    return (
      <section className="grid-item__fill-fields">
        <form action="/signup" method="post" className="main-form">
          <Palettes
            isCollapsibleOpen={this.props.isCollapsibleOpen}
            collapsibleAction={this.props.collapsibleAction}
            dataUser={this.props.dataUser}
            actionToPerform={this.props.actionToPerform}
          />
          <FillCollapsible
            isCollapsibleOpen={this.props.isCollapsibleOpen}
            collapsibleAction={this.props.collapsibleAction}
            dataUser={this.props.dataUser}
            actionToPerform={this.props.actionToPerform}
            updatePhoto={this.props.updatePhoto}
            isPhotoDefault={this.props.isPhotoDefault}
          />
          <section className="panel">
            <div className="panel__dropdown">
              <div className="title-image__wrapper">
                <img className="dropdown__icon-section" src={icoShare} alt="" />
                <h2 className="dropdown__title">Comparte</h2>
              </div>
              <img
                className="dropdown__arrow--up"
                id="dropdown__down-arrow--share"
                src={icoDownArrow}
                alt="Abrir panel compartir"
              />
            </div>
            <div className="align_share">
              <button className="btn_share" type="submit">
                <img
                  className="icon__id-card"
                  src={icoIdCard}
                  alt="Crear tarjeta"
                />
                Crear Tarjeta
              </button>
            </div>
          </section>
          <section className="align_share align_share_text panel-design panel__twitter">
            <p className="card-create">La tarjeta ha sido creada</p>
            <p>
              {" "}
              <a className="card-link" href="" />
            </p>
            <div className="align_share">
              {" "}
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
        </form>
      </section>
    );
  }
}

export default FormSection;
