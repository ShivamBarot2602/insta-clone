import React, { Component } from 'react';
import "../css/Navbar.css"
import { Nav, Container, Button } from 'react-bootstrap';

class Navbar extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isUser :localStorage.getItem("User")
    }
  }

  remove = (e) => {
    localStorage.removeItem('User');
    // this.props.loggin();
    this.setState({isUser : localStorage.getItem("User")})
    // localStorage.removeItem('mail');
    // localStorage.removeItem('psswrd');

}

handleLogin = () => {
  this.props.loggin();
}

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Instagram</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
            {/* <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            {/* && this.props.logout */}
            <Button className="log-btn" type="submit"  onClick={this.state.isUser ? this.remove : this.handleLogin}><i class="fas fa-power-off"></i> {this.state.isUser ? <div className="lgd">Logout</div> : <div className="lgd">Login</div>}</Button>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar