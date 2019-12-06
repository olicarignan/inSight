import React, { useState } from 'react';

import './registerPage.scss';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';

export default function RegisterPage(props) {
	const [ first_name, setFirstName ] = useState('');
	const [ last_name, setLastName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ loggedIn, setLoggedIn ] = useState(false);
	const [ login, setLogin ] = useState(false);

	function onSave(first_name, last_name, email, password) {
		if (first_name && last_name && email && password) {
			const newUser = {
				first_name,
				last_name,
				email,
				password
			};
			return props.addUser(newUser).then(() => {
				setLoggedIn(true);
			});
		}
	}

	return (
		<div>
			{props.isAuthenticated === true && <Redirect to="/main" />}
			<div>{login === true && <Redirect to="/" />}</div>
			<body className='main'>
			<img className="logo"
				src='/logo.svg'
				alt='logo'></img>
				<div className="container">
					<div className="row">
						<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
							<div className="card card-register my-5">
								<div className="card-body">
									<h5 className="card-title text-center">Register</h5>
									<form
										className="form-register"
										onSubmit={(event) => {
											event.preventDefault();
											onSave(first_name, last_name, email, password);
										}}
									>
										<div className="form-label-group">
											<input
												type="text"
												name="first_name"
												value={first_name}
												onChange={(event) => {
													setFirstName(event.target.value);
												}}
												id="inputText"
												className="form-control"
												placeholder="First Name"
												required
												autofocus
											/>
											<label for="inputText">First Name</label>
										</div>
										<div className="form-label-group">
											<input
												type="text"
												name="last_name"
												value={last_name}
												onChange={(event) => {
													setLastName(event.target.value);
												}}
												id="inputText"
												className="form-control"
												placeholder="Last Name"
												required
												autofocus
											/>
											<label for="inputText">Last Name</label>
										</div>
										<div className="form-label-group">
											<input
												type="email"
												name="email"
												value={email}
												onChange={(event) => {
													setEmail(event.target.value);
												}}
												id="inputEmail"
												className="form-control"
												placeholder="Email address"
												required
												autofocus
											/>
											<label for="inputEmail">Email address</label>
										</div>
										<div className="form-label-group">
											<input
												type="password"
												name="password"
												value={password}
												onChange={(event) => {
													setPassword(event.target.value);
												}}
												id="inputPassword"
												className="form-control"
												placeholder="Password"
												required
											/>
											<label for="inputPassword">Password</label>
										</div>
										<hr className="my-4" />
										<button
											className="btn btn-lg btn-primary btn-block text-uppercase"
											type="submit"
										>
											Register
										</button>
										<button
											className="btn btn-lg btn-primary btn-block text-uppercase"
											onClick={() => setLogin(true)}
										>
											I already have an account
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</body>
		</div>
	);
}
