import React from 'react';
import './Button.scss';

const Button = ({handleClick}) => {
	const defaultText = "Button Text Info";
	
	return (
		<button className="DefaultButton" onClick={handleClick}>
			<p>{defaultText}</p>
		</button>
	)
};

export default Button;