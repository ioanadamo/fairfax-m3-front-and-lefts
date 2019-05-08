import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="app-header">
        <div className="column-center">
          <h1>
            <a href={this.props.link} className="link-home">
              <img
                className="app-header__logo"
                src={this.props.logoSrc}
                alt="Awesome profile cards"
              />
            </a>
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
