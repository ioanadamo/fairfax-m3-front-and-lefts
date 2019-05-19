import React from "react";
import logoDisena from "./images/logo-disena-aventura.jpg";
import logoAdalab from "./images/logo-adalab.png";
import logoAwesome from "./images/logo-awesome-profile-cards.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Svgs from "./components/Svgs";
import PreviewSection from "./components/PreviewSection";
import FormSection from "./components/FormSection";
import DefaultPhoto from "./images/user-photo-default.png"
import "./App.css";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: {
        palette: "1",
        name: "",
        job: "",
        phone: "",
        email: "",
        linkedin: "",
        github: "",
        photo: DefaultPhoto,
      },
      isPhotoDefault: true,
	};
	this.handleChange=this.handleChange.bind(this)
	this.updatePhoto=this.updatePhoto.bind(this)
  }

  handleChange(event) {
	const value = event.target.value;
	const field = event.target.name;
    this.setState(prevState => ({
      dataUser: {
        ...prevState.dataUser,
        [field]: value
      }
    }));
  }
  updatePhoto(img) {
    const {dataUser} = this.state;
    this.setState(prevState => {
      const newDataUser = {
        ...dataUser,
        photo: img
      };
      return {
        dataUser: newDataUser,
        isPhotoDefault: false
      }
    })
  }
  render() {
    return (
      <div className="place-items__cardmaker">
        <Svgs />
        <Header link="index.html" logoSrc={logoAwesome} />

        <main className="main-content column-center">
          <PreviewSection dataUser={this.state.dataUser} />
          <FormSection
            dataUser={this.state.dataUser}
            actionToPerform={this.handleChange}
            updatePhoto={this.updatePhoto}
            isPhotoDefault={this.state.isPhotoDefault}
          />
        </main>
        <Footer firstLogo={logoDisena} secondLogo={logoAdalab} />
      </div>
    );
  }
}

export default App;
