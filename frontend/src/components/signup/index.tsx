import React, { useState } from 'react';
import * as yup from 'yup';
import TextBox from '../../tag-ui/input/textBox';
import ApplyButton from '../../tag-ui/button/applyButton';
import axios from 'axios';

interface signupObject {
	[key: string]: string | undefined;
	id: string;
	password: string;
	password2: string;
	name: string;
	email: string
};

interface signupPost {
	message: string;
}

const pwRegexp: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/gi;
const signupSchema = yup.object({
	id: yup
		.string()
		.required('아이디를 입력해주세요.')
		.min(5),
	password: yup
		.string()
		.required('비밀번호를 입력해주세요.')
		.min(6, '비밀번호는 최소 6자 이상 입력해주세요.')
		.test(
			'pw-test',
			'비밀번호에는 숫자와 영대소문자 및 특수문자가 포함되어야 합니다.',
			(pw: any) => {
				const result = pwRegexp.test(pw);
				return result;
			}
		),
	name: yup
		.string()
		.required('이름을 입력해주세요.'),
	email: yup.string()
		.required('이메일을 입력해주세요.')
		.email('이메일 형식이 아닙니다.'),
});

const SignUp: React.FC = () => {
	const signup: signupObject = {
		id: '',
		password: '',
		password2: '',
		name: '',
		email: '',
	}

	const onSubmitSignup = async (e: any) => {
		e.preventDefault();
		try {
			await signupSchema.validate(signup);
		} catch (e) {
			// TODO: message Design
			alert(e.message);
			return;
		}

		if (signup.password !== signup.password2) {
			alert('비밀번호가 다릅니다!');
			return;
		}

		try {
			const response = await axios.post<signupObject>('/api/member/signup', signup);
		} catch (e) {
			alert(e.message);
		}
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
				name="name"
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
