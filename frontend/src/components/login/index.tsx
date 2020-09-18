import * as React from 'react';
import TextBox from '../../tag-ui/input/textBox';
import ApplyButton from '../../tag-ui/button/applyButton';

const Login: React.FC = () => {

  return (
		<div className="card">
			<h4>로그인</h4>
			<TextBox
				placeholder="아이디"
				style={{ marginBottom: 10 }}
			/>
			<TextBox
				type="password"
				placeholder="패스워드"
				style={{ marginBottom: 10 }}
			/>
			<div className="flex-r">
				<ApplyButton
					text="로그인"/>
			</div>
		</div>
  );
}

export default Login;
