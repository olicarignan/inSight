import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";

import './loginPage.scss';
import axios from 'axios';

export default function LoginPage(props) {

	const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
	const [ register, setRegister ] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);

	const save = (email, password) => {
		if(email && password) {
			const currentUser = {
				email,
        password
			}
			return props
					.userLogin(currentUser)
					.then(() => {
            
							setLoggedIn(true);
					})
	}
}


	return (
    <div>
    <div>
    {loggedIn === true && <Redirect to="/main"/>}
    </div>
    <div>
    {register === true && <Redirect to="/register"/>}
    </div>
		<body>
			<div className="container">
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card card-signin my-5">
							<div className="card-body">
								<h5 className="card-title text-center">Sign In</h5>
								<form className="form-signin" onSubmit={(event) => {
									event.preventDefault()
									save(email, password)
								}}>
									<div className="form-label-group">
										<input
											type="email"
											id="inputEmail"
											className="form-control"
											value={email}
											onChange={(event) => {
												setEmail(event.target.value);
											}}
											placeholder="Email address"
											required
											autofocus
										/>
										<label for="inputEmail">Email address</label>
									</div>
									<div className="form-label-group">
										<input
											type="password"
											id="inputPassword"
											value={password}
											onChange={(event) => {
												setPassword(event.target.value);
											}}
											className="form-control"
											placeholder="Password"
											required
										/>
										<label for="inputPassword">Password</label>
									</div>
									<hr className="my-4" />
									<button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
										Sign in
									</button>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="button" onClick={() => setRegister(true)}>
										create an account
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
