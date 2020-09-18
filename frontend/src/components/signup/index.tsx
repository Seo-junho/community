import React, { useState } from 'react';
import * as yup from 'yup';
import TextBox from '../../tag-ui/input/textBox';
import ApplyButton from '../../tag-ui/button/applyButton';


interface signupObject {
	[key: string]: string | undefined;
	id: string;
	password: string;
	password2: string;
	username: string;
	email: string
};

const signupSchema = yup.object({
	id: yup.string(),
	password: yup.string(),
	name: yup.string(),
	email: yup.string().email(),
});

const SignUp: React.FC = () => {
	const signup: signupObject = {
		id: '',
		password: '',
		password2: '',
		username: '',
		email: '',
	}

	const onSubmitSignup = (e: any) => {
		e.preventDefault();
		// TODO: yup
		if (signup.password !== signup.password2) {
			alert('비밀번호가 다릅니다!');
			return;
		}
		// TODO: axios
	}

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		if (signup[name] !== undefined) {
			signup[name] = value;
		}
	}

  return (
		<form onSubmit={onSubmitSignup} className="card">
			<h4>회원가입</h4>
			<TextBox
				name="id"
				placeholder="아이디"
				style={{ marginBottom: 10 }}
				onChange={handleChange}
			/>
			<TextBox
				name="password"
				type="password"
				placeholder="패스워드"
				style={{ marginBottom: 10 }}
				onChange={handleChange}
			/>
			<TextBox
				name="password2"
				type="password"
				placeholder="패스워드 확인"
				style={{ marginBottom: 10 }}
				onChange={handleChange}
			/>
			<TextBox
				name="username"
				type="text"
				placeholder="사용자 이름"
				style={{ marginBottom: 10 }}
				onChange={handleChange}
			/>
			<TextBox
				name="email"
				type="text"
				placeholder="이메일"
				style={{ marginBottom: 10 }}
				onChange={handleChange}
			/>
			<div className="flex-r">
				<ApplyButton
					type="submit"
					text="회원가입"/>
			</div>
		</form>
  );
}

export default SignUp;
