import React from "react";
import PropTypes from 'prop-types';

class PreviewName extends React.Component {
    render() {
        return (
            <h2 className="full-name__card" id="card-name">{this.props.nameSurname}</h2>
        );
    }
};

PreviewName.propTypes = {
    nameSurname: PropTypes.string.isRequired,
};
export default PreviewName;