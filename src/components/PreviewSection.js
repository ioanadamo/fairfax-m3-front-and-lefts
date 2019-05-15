import React from 'react';
import icoTrash from '../images/trash.svg';
import PreviewCard from './PreviewCard';

class PreviewSection extends React.Component {
	render() {
		return (
			<section className="preview__section grid-item__card bgc-color-green">
				<div className="preview__section--container">
					<button className="reset__button">
						<img className="trash-icon" src={icoTrash} alt="imagen reset" />
						Reset
					</button>
					<PreviewCard />
				</div>
			</section>
		);
	}
}

export default PreviewSection;
