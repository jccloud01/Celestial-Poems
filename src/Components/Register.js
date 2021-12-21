import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';

function Register(props) {
	const [userInput, setUserInput] = useState({
		userName: '',
		email: '',
		password: '',
		poems: [],
	});

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		const copy = Object.assign({}, userInput);
		copy[name] = value;

		setUserInput(copy);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch("https://localhost:8080/user", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userInput),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.user) {
					console.log(data.user);
					props.setUser(data.user);
				} else {
					alert(data.message);
				}
			})
			.catch((err) => console.log(err));
	};

	return props.user && props.user.userName ? (
		<Navigate to='/login' />
	) : (
		<div className='intro-box'>
			<form className='formUser' onSubmit={handleSubmit}>
				<input
					className='userInput'
					onChange={handleChange}
					type='string'
					name='userName'
					value={userInput.userName}
					placeholder='enter username'
				/>

				<input
					className='userInput'
					onChange={handleChange}
					type='string'
					name='password'
					placeholder='enter password'
				/>

				<Link to='/login'>
					<button className='primaryButton' onClick={handleSubmit}>
						Register
					</button>
				</Link>
			</form>
		</div>
	);
}

export default Register;
