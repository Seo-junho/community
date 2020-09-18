import * as React from 'react';
import './textBox.scss';

export interface textBoxProps {
	type?: string,
	style?: object,
	value?: string,
}

const textBox: React.FC<textBoxProps> = (props) => {
	const { style, value } = props;

  return (
		<input
			className="default-input"
			style={style}
			value={value}
		/>
  );
}
textBox.defaultProps = {
	type: 'text',
	style: {},
	value: '',
}


export default textBox;
