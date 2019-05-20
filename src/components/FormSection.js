import React from "react";
import Palettes from "./Palettes";
import FillCollapsible from "./FillCollapsible";
import ShareCollapsible from "./ShareCollapsible";

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
          <ShareCollapsible
            isCollapsibleOpen={this.props.isCollapsibleOpen}
            collapsibleAction={this.props.collapsibleAction}
            dataUser={this.props.dataUser}
            actionToPerform={this.props.actionToPerform}
          />
        </form>
      </section>
    );
  }
}

export default FormSection;
