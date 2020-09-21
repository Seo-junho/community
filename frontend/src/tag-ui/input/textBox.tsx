import * as React from 'react';
import './textBox.scss';

export interface textBoxProps {
	name?: string,
	type?: string,
	style?: object,
	placeholder?: string,
	onChange?: any,
};

const textBox: React.FC<textBoxProps> = (props) => {
	const { name, type, style, placeholder, onChange } = props;

  return (
		<input
			name={name}
			type={type}
			className="default-input"
			style={style}
			placeholder={placeholder}
			onChange={onChange}
		/>
  );
};

textBox.defaultProps = {
	name: '',
	type: 'text',
	style: {},
	placeholder: '',
	onChange: () => {},
};


export default textBox;
