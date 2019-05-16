import React from 'react';

class Collapsible extends React.Component{
    render(){
        return(
              <div className="panel__dropdown">
                <div className="title-image__wrapper">
                  <img
                    className="dropdown__icon-section"
                    src="./assets/images/ungroup.svg"
                    alt=""
                  />
                  <h2 className="dropdown__title">Diseña</h2>
                </div>
                <img
                  className="dropdown__arrow--up"
                  id="dropdown__down-arrow--design"
                  src="./assets/images/down-arrow.svg"
                  alt="Abrir panel diseña"
                />
              </div>
        );
    }




}



export default Collapsible;