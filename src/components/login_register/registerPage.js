import React from 'react'

import "./registerPage.scss"

export default function RegisterPage(props) {
  return(
      <body>
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-register my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Register</h5>
                  <form className="form-register">
                  <div className="form-label-group">
                      <input type="text" id="inputText" className="form-control" placeholder="First Name" required autofocus/>
                      <label for="inputText">First Name</label>
                    </div>
                  <div className="form-label-group">
                      <input type="text" id="inputText" className="form-control" placeholder="Last Name" required autofocus/>
                      <label for="inputText">Last Name</label>
                    </div>
                    <div className="form-label-group">
                      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                      <label for="inputEmail">Email address</label>
                    </div>
                    <div className="form-label-group">
                      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                      <label for="inputPassword">Password</label>
                    </div>
                    <hr className="my-4"/>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
  )
}