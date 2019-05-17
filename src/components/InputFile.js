import React, { Component } from "react";
import PropTypes from "prop-types";

class GetPhoto extends Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();
    this.myFileField = React.createRef();

    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  handleFilePicker() {
    this.myFileField.current.click();
  }

  uploadImage(e) {
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener("load", this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.updatePhoto(image);
  }

  getPreview(isDefault, image) {
    return !isDefault ? { backgroundImage: `url(${image})` } : {};
  }

  render() {
    const { isPhotoDefault, photo } = this.props;
    return (
      <div className="item__info--image-container">
        <input
          type="file"
          className="js__profile-upload-btn item__info hidden__file--button"
          name="photo"
          id="personalImage"
          ref={this.myFileField}
          onChange={this.uploadImage}
        />
        <button
          type="button"
          className="item__info--button js__profile-trigger"
          onClick={this.handleFilePicker}
        >
          Añadir imagen
        </button>
        <div
          className="js__profile-preview item__info--thumbnail"
          style={this.getPreview(isPhotoDefault, photo)}
        />
      </div>
    );
  }
}

GetPhoto.propTypes = {
  isPhotoDefault: PropTypes.bool.isRequired,
  photo: PropTypes.string.isRequired,
  updatePhoto: PropTypes.func.isRequired
};

export default GetPhoto;
