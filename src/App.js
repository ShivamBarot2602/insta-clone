import React ,{Component} from "react";
import Login from "./components/Login";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
// import {Routes, Route}from 'react-router-dom'
import { BrowserRouter, Switch ,Route,Redirect} from "react-router-dom";

class App extends Component{

  

  constructor(props) {
    super(props)

    this.state = {
       userData : localStorage.getItem("User")
    }
  }

loggin = () => {
  this.setState({userData : localStorage.getItem("User")})
}

  render(){
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        {/* <Route path="posts" element={<Posts/>}></Route> */}
        {/* <Route path="/" element={<Posts/>}></Route>
        <Route path="login" element={<Login/>}></Route> */}

        <Route exact path="/" render={() => (
        
          this.state.userData ? (
            <>
            <Posts check={this.state.userData} loggin={this.loggin}/>
            {/* <Profile/> */}
            </>
          ) : (
            <Login loggin={this.loggin} />
          )
        )}>
          </Route>
        
        </Switch>
      </BrowserRouter>
      {/* <Login /> */}
    </div>
  );
}
}

export default App;
