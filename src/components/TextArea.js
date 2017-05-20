import React from 'react';

const TextArea = (props) => (
	<div className={props.mandatory ? "form-group has-success"  : "form-group" }>
		<label className="col-lg-2 control-label">{props.title}</label>
		<div className="col-lg-10">
		<textarea
			className="form-control"
			style={props.resize ? null : {resize: 'none'}}
			name={props.name}
			rows={props.rows}
			value={props.content}
			onChange={props.controlFunc}
			placeholder={props.placeholder} />
			</div>
	</div>
);

TextArea.propTypes = {
	title: React.PropTypes.string.isRequired,
	rows: React.PropTypes.number.isRequired,
	name: React.PropTypes.string.isRequired,
	content: React.PropTypes.string.isRequired,
	resize: React.PropTypes.bool,
	placeholder: React.PropTypes.string,
	controlFunc: React.PropTypes.func.isRequired
};

export default TextArea;