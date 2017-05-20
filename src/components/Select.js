import React from 'react';

const Select = (props) => (
	<div className={props.mandatory ? "form-group has-success"  : "form-group" }>
		<label className="col-lg-2 control-label">{props.title}</label>
	    <div className="col-lg-10">
		<select
			name={props.name}
			value={props.selectedOption}
			onChange={props.controlFunc}
			className="form-control">
			<option value="">{props.placeholder}</option>
			{props.options.map(opt => {
				return (
					<option
						key={opt}
						value={opt}>{opt}</option>
				);
			})}
		</select>
		</div>
	</div>
);

Select.propTypes = {
	title: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired,
	selectedOption: React.PropTypes.string,
	controlFunc: React.PropTypes.func.isRequired,
	placeholder: React.PropTypes.string
};

export default Select;