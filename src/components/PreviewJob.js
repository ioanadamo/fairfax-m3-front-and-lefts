import React from "react";
import PropTypes from 'prop-types';

class PreviewJob extends React.Component {
    render(){
        return(
        <h3 className="ocupation__card" id="card-job">
           {this.props.job}
        </h3>
        );
    }
}
PreviewJob.propTypes = {
    job: PropTypes.string.isRequired,
};
export default PreviewJob;
