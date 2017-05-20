import React from 'react';

const SingleInput = (props) => (
	<div className={props.mandatory ? "form-group has-success"  : "form-group" }>
		<label className="col-lg-2 control-label">{props.title}</label>
			<div className="col-lg-10">
				<input
					className="form-control"
					name={props.name}
					type={props.inputType}
					value={props.content}
					onChange={props.controlFunc}
					placeholder={props.placeholder} />
			</div>
	</div>
);

export default SingleInput;
