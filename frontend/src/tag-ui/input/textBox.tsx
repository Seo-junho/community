import * as React from 'react';
import './textBox.scss';

export interface textBoxProps {
	type?: string,
	style?: object,
	placeholder?: string,
}

const textBox: React.FC<textBoxProps> = (props) => {
	const { type, style, placeholder } = props;

  return (
		<input
			type={type}
			className="default-input"
			style={style}
			placeholder={placeholder}
		/>
  );
}
textBox.defaultProps = {
	type: 'text',
	style: {},
	placeholder: '',
}


export default textBox;
