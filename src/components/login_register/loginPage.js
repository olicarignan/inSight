import React from 'react'

import "./loginPage.scss"

export default function LoginPage(props) {
  return(
      <body>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Sign In</h5>
                  <form className="form-signin">
                    <div className="form-label-group">
                      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                      <label for="inputEmail">Email address</label>
                    </div>
                    <div className="form-label-group">
                      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                      <label for="inputPassword">Password</label>
                    </div>
                    <hr className="my-4"/>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
  )
}