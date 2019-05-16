import React from 'react';
import logoDisena from './images/logo-disena-aventura.jpg';
import logoAdalab from './images/logo-adalab.png';
import logoAwesome from './images/logo-awesome-profile-cards.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Svgs from "./components/Svgs";
import PreviewSection from './components/PreviewSection';
import FormSection from './components/FormSection';
import './App.css';


class App extends React.Component{
  constructor(props){
	super(props);
	this.state = {
		palette : 2,
	}
	this.changeColor = this.changeColor.bind(this);
  }

  changeColor(event){
	console.log(event.currentTarget.value);
	this.setState({
		palette:event.currentTarget.value,
	});
	console.log('adios');
}
  render(){
    
  return (
    <div className="place-items__cardmaker">
      <Svgs />
      <Header link="index.html" logoSrc={logoAwesome} />

			<main className="main-content column-center">
				<PreviewSection palette = {this.state.palette} />
        <FormSection actionPerform ={this.changeColor}/>
			</main>
      <Footer firstLogo={logoDisena} secondLogo={logoAdalab} />
    </div>
  );
}
}

export default App;
