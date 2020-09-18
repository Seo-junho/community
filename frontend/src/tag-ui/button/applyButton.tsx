import * as React from 'react';
import './applyButton.scss';

export interface applyButtonProps {
	type?: any,
	style?: object,
	text?: string,
}

const applyButton: React.FC<applyButtonProps> = (props) => {
	const { type, style, text } = props;

  return (
		<button
			type={type}
			className="btn-base apply"
			style={style}
		>{text}</button>
  );
}
applyButton.defaultProps = {
	type: 'button',
	style: {},
	text: '버튼',
}


export default applyButton;
