import React from 'react';

const CheckboxOrRadioGroup = (props) => (
	<div className="form-group">
		<label className="col-lg-2 control-label">{props.title}</label>
		<div className="radio">
			{props.options.map(option => {
				return (
					<label key={option} className="form-control">
						<input
							className="radio"
							name={props.setName}
							onChange={props.controlFunc}
							value={option}
							checked={props.selectedOptions.indexOf(option) > -1}
							type={props.type} /> {option}
					</label>
				);
			})}
		</div>
	</div>
);

CheckboxOrRadioGroup.propTypes = {
	title: React.PropTypes.string.isRequired,
	type: React.PropTypes.oneOf(['checkbox', 'radio']).isRequired,
	setName: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired,
	selectedOptions: React.PropTypes.array,
	controlFunc: React.PropTypes.func.isRequired
};

export default CheckboxOrRadioGroup;	