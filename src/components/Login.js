import React, { Component } from "react";
import "../css/Login.css";
import Posts from "./Posts";
import { Form, Button } from "react-bootstrap";

import { Link ,Navigate,Route} from "react-router-dom";

// import { useNavigate } from "react-router-dom";
import {Redirect} from 'react-router-dom'

// const navigate =  useNavigate()
export default class Login extends Component {



userdata;  

  constructor(props) {
    super(props)
  
    this.state = {
        user: "",
        mail : "",
        psswrd : ""
    }
  }

onSubmit = (e) => {
    e.preventDefault();
    this.userData = JSON.parse(localStorage.getItem('User'));
    if(this.userData){
        console.log("Entered")
        this.props.loggin()
    }
}

onChangeuser = (e) => {
    this.setState({ user : e.target.value})
    console.log(this.state.user)
  }

onChangemail = (e) => {
    this.setState({ mail : e.target.value})
     console.log(this.state.mail)
}  

onChangepsswrd = (e) => {
    this.setState({ psswrd : e.target.value})
    console.log(this.state.psswrd)
}

remove = (e) => {
    localStorage.removeItem('user');
    localStorage.removeItem('mail');
    localStorage.removeItem('psswrd');
}


// componentDidMount(){
//     this.userData = JSON.parse(localStorage.getItem('user'));

//     if(this.userData){
//         console.log("Hello world")
//     }
// }

// componentDidMount() {
//     this.userData = JSON.parse(localStorage.getItem('User'));


//     if (localStorage.getItem('User')){

//         console.log("Welcome "+ this.userData.user);
//         this.setState({
//             user: this.userData.user,
//             mail: this.userData.mail,
//             psswrd: this.userData.psswrd,
//         })
//     }

//     else {
//         console.log("Welcome ");
//         this.setState({
//             user: '',
//             mail: '',
//             psswrd: '',
//         });
//     }
    
// }


componentWillUpdate(nextProps, nextState){
    localStorage.setItem('User',JSON.stringify(nextState));
}

  

  render() {
    return (
      <div class="cont">
        <div class="frm">
          <div class="heading">Welcome to Insta</div>
          <div class="frm-body">
            <Form  onSubmit={this.onSubmit}>
            <Form.Group className="mb-3 mail" controlId="formBasicEmail">
                <Form.Label class="lbl-mail">Username</Form.Label>
                <Form.Control type="name" placeholder="Enter username" value={this.state.user} onChange={this.onChangeuser}/>
              </Form.Group> 
{/* {/* value={this.state.mail} onChange={this.onChangemail} */}
              <Form.Group className="mb-3 mail" controlId="formBasicEmail">
                <Form.Label class="lbl-mail">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={this.state.mail} onChange={this.onChangemail}/>
                <Form.Text className="text-muted">
                  Please enter a valid mail address
                </Form.Text>
              </Form.Group>

              {/* value={this.state.psswrd} onChange={this.onChangepsswrd} */}

              <Form.Group className="mb-3 psword" controlId="formBasicPassword">
                <Form.Label class="lbl-pswrd">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={this.state.psswrd} onChange={this.onChangepsswrd}/>
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              {/* <Button variant="primary" type="submit" onClick={() => }>
                Sign in
              </Button> */}
              <Button  type="submit" variant="btn btn-primary">Sign up</Button>
              {/* <button onClick={this.remove}>Remove</button> */}
            </Form>
          </div>
        </div>
       </div>
    );
  }
}
