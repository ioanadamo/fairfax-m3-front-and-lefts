import React from 'react';
import icoTrash from '../images/trash.svg';
import PreviewCard from './PreviewCard';

class PreviewSection extends React.Component {
	
	render() {
		let theme;
		if (this.props.dataUser.palette=== '1') {
			theme = 'bgc-color-green';
		} else if (this.props.dataUser.palette === '2') {
			theme = 'bgc-color-red';
		} else if (this.props.dataUser.palette === '3') {
			theme = 'bgc-color-blue';
		}
		return (
			<section className={`preview__section grid-item__card ${theme}`}>
				<div className="preview__section--container">
					<button className="reset__button">
						<img className="trash-icon" src={icoTrash} alt="imagen reset" />
						Reset
					</button>
					<PreviewCard dataUser={this.props.dataUser}/>
				</div>
			</section>
		);
	}
}

export default PreviewSection;
