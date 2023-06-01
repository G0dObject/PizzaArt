import React, { useRef, useState } from 'react';

import './_Admin.scss';

const Auth = () => {
	const email = useRef(null);
	const pass = useRef(null);
	const passR = useRef(null);
	const username = useRef(null);
	const [error, setError] = useState('');

	const passEye = (ref: React.RefObject<HTMLInputElement>[]) => {
		ref.forEach((element) => {
			if (element.current!.type === 'password') {
				element.current!.type = 'text';
				element.current?.focus();
			} else {
				element.current!.type = 'password';
				element.current?.focus();
			}
		});
	};

	// const login = () => {
	// 	let eref = email as React.RefObject<HTMLInputElement>;
	// 	let pref = pass as React.RefObject<HTMLInputElement>;

	// 	store
	// 		.login({
	// 			email: eref.current?.value as string,
	// 			password: pref.current?.value as string,
	// 		})
	// 		.then((response) => {
	// 			console.log(response);

	// 			if (response === undefined) {
	// 				setError('Что-то пошло не так');
	// 			}
	// 			switch (response) {
	// 				case 400:
	// 					setError('Что-то пошло не так');
	// 					break;
	// 				case 401:
	// 					setError('Не верный email ил пароль');
	// 					break;

	// 				default:
	// 					setError('Что-то пошло не так');
	// 					break;
	// 			}
	// 		});
	// };
	// const singin = () => {
	// 	return (
	// 		<>
	// 			<div className="auth-window__label">Админ меню</div>
	// 			<div className="auth-window__inputs">
	// 				<input
	// 					placeholder="Эл. Почта"
	// 					ref={email}
	// 					type="email"
	// 					className="auth-window__field"></input>
	// 				<div className="pass">
	// 					<input
	// 						placeholder="Пароль"
	// 						type="password"
	// 						className="auth-window__password"
	// 						ref={pass}></input>
	// 					<img onClick={() => passEye([pass])} src={''}></img>
	// 				</div>
	// 			</div>
	// 			<h1>{error}</h1>
	// 			<button onClick={login} className="submit authbutton">
	// 				Войти
	// 			</button>
	// 			<div className="separator"></div>
	// 			<div className="another"></div>
	// 		</>
	// 	);
	// };
	return (
		<div className="background">
			<div className="auth-wrapper">
				<div className="auth-window-wrapper">
					<div className="auth-window">{}</div>
				</div>
			</div>
		</div>
	);
};

export default Auth;
