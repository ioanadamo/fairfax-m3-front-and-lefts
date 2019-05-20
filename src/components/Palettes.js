import React from 'react';
import icoUngroup from "../images/ungroup.svg";
import icoDownArrow from "../images/down-arrow.svg";

class Palettes extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.props.actionToPerform;
    }

    render() {
        	// isCollapsibleOpen={this.props.isCollapsibleOpen}
	// collapsibleAction={this.props.collapsibleAction}
        return (
            <section className="panel">
            <div className="panel__dropdown" data-id='designid' onClick={this.props.collapsibleAction}>
              <div className="title-image__wrapper">
                <img
                  className="dropdown__icon-section"
                  src={icoUngroup}
                  alt=""
                />
                <h2 className="dropdown__title">Diseña</h2>
              </div>
              <img
                className="dropdown__arrow--up"
                id="dropdown__down-arrow--design"
                src={icoDownArrow}
                alt="Abrir panel diseña"
              />
            </div>
            <div className={`panel__design-radios panel--openFlex ${this.props.isCollapsibleOpen === 'designid' ? '' : 'panel--close'}`}>
                <p className="radios__title">Colores</p>
                <div className="radios__picker">
                    <label
                        className="control__text radios-text"
                        htmlFor="option-color-1"
                    >
                        <input
                            className="control__radio radios-buttons"
                            id="option-color-1"
                            type="radio"
                            value="1"
                            name="palette"
                            checked={this.props.dataUser.palette === "1"}
                            onClick={this.handleClick}
                        />
                        <span className="control__indicator" />
                        <span className="box-wrapper">
                            <span className="box box-color1" />
                            <span className="box box-color2" />
                            <span className="box box-color3" />
                        </span>
                    </label>
                    <label
                        className="control__text radios-text"
                        htmlFor="option-color-2"
                    >
                        <input
                            className="control__radio radios-buttons"
                            id="option-color-2"
                            type="radio"
                            value="2"
                            name="palette"
                            checked={this.props.dataUser.palette === "2"}
                            onClick={this.handleClick}
                        />
                        <span className="control__indicator" />
                        <span className="box-wrapper">
                            <span className="box box-color4" />
                            <span className="box box-color5" />
                            <span className="box box-color6" />
                        </span>
                    </label>
                    <label
                        className="control__text radios-text"
                        htmlFor="option-color-3"
                    >
                        <input
                            className="control__radio radios-buttons"
                            id="option-color-3"
                            type="radio"
                            value="3"
                            name="palette"
                            checked={this.props.dataUser.palette === '3'}
                            onClick={this.handleClick}
                        />
                        <span className="control__indicator" />
                        <span className="box-wrapper">
                            <span className="box box-color7" />
                            <span className="box box-color8" />
                            <span className="box box-color9" />
                        </span>
                    </label>
                </div>
            </div>
          </section>

        );
    }

}

export default Palettes;