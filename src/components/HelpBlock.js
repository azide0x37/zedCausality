import React from 'react';

const HelpBlock = (props) => (
	<span className="help-block">{props.helpText}</span>
);

HelpBlock.propTypes = {
	helpText: React.PropTypes.string.isRequired,
};

export default HelpBlock;