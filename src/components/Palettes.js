import React from 'react';

class Palettes extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    
    }
    handleClick(event){
        console.log(event.currentTarget.value);
    }
   
    render(){
        return(

            <div className="panel__design-radios panel--openFlex">
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
                        onClick = {this.handleClick}
                    />{' '}
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
                        onClick = {this.handleClick}
                    />{' '}
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
                        onClick = {this.handleClick}
                    />{' '}
                    <span className="control__indicator" />
                    <span className="box-wrapper">
                        <span className="box box-color7" />
                        <span className="box box-color8" />

                        <span className="box box-color9" />
                    </span>
                </label>
            </div>
        </div>


        );
    }





}





export default Palettes;