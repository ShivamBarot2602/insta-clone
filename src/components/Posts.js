import React, { Component } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Login from './Login'
import { Card, Button } from "react-bootstrap";
import { Redirect } from "react-router";
import Navbar from "./Navbar";
import "../css/Posts.css"

// import { Redirect } from "react-router/cjs/react-router";
// import { Redirect } from "react-router-dom";



export default class Posts extends Component {

  userData

  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      img: [],
      comments: [],
      usercmt : "",
      errorMsg: '',
      logedin: false,
      clicked: null
    }
  }




  componentDidMount() {


    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // console.log(response)
        this.setState({ posts: response.data.slice(1, 10) })
        // console.log(response.data.slice(1,10))
      })
      .catch(error => {
        console.log(error)
        this.setState({ errorMsg: "Error retreiving data" })
      })

    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        this.setState({ img: response.data.slice(1, 10) })
        // console.log(response.data.slice(1,10))
      })
      .catch(error => {
        console.log(error)
      })

  }

  viewcmts = (id) => () => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        // console.log(response)
        this.setState({ comments: response.data.slice(1, 10) })
      })
      .catch(error => {
        console.log(error)
      })
    // console.log("id", id)

    this.state.clicked === id ? this.setState({ clicked: null }) : this.setState({ clicked: id })


    if (!localStorage.getItem("User")) {
      this.props.loggin()
    }
  }

  onUserCmt = (e) => {
    this.setState({ usercmt : e.target.value})
  }

  addCmnts = () => {
    const add = {};
    axios.put('https://jsonplaceholder.typicode.com/comments/1',add)
    .then(() => {
      const pst = {
        body: this.state.usercmt
      };

      const post = this.state.comments.push(pst);
      this.setState({ post });
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // loginVerify = () => {
  //   if(localStorage.getItem("User")){
  //     console.log("user found")
  //     this.setState({logedin : true})
  //   }
  //   else
  //   {
  //     console.log("User removed")
  //     this.setState({logedin : false})
  //   }
  // }


  render() {
    const { posts, img, comments } = this.state
    return (

      <div>
        <Navbar />
        {posts.length && img.length ? posts.map((post, index) => {
          // console.log(index)
          const postImg = img[index];
          // console.log(postImg)
          return (
            
            <Card className="insta-crd" key={post.id} style={{ width: "18rem" }}>
              
              <div className="hding">
              <i class="far fa-user-circle"></i>
              <Card.Title className="title-id">{post.title.slice(1, 8)}</Card.Title>
              </div>
              <Card.Img className="crd-img" variant="top" src={postImg.thumbnailUrl} />
              <div className="icns">
                <div className="icon"><i class="far fa-heart"></i></div>
                <div className="icon"><i class="far fa-comment"></i></div>
                <div className="icon"><i class="fa-regular fa-paper-plane"></i></div>
              </div>
              
              <Card.Body>
              {/* <Card.Img variant="top" src={postImg.thumbnailUrl} /> */}
              <div className="views">4,52,672 views</div>
              <div className="crd-bdy">
              <Card.Title className="title-id cnt">{post.title.slice(1, 8)}</Card.Title>
                <Card.Text className="crd-txt cnt">
                  {post.body.slice(1, 20)}
                </Card.Text>
              </div>
                <p className="cmt-cl" variant="primary" onClick={this.viewcmts(post.id)}>View all {posts.length} Comments</p>
                <p className="cmt-cl-d">{Math.floor((Math.random() * 10) + 1)} days ago</p>
                <Card.Text>
                  {this.state.clicked === post.id && (localStorage.getItem("User")) ?
                    <div>
                      {
                        comments.map(comment => <ul className="list"><div className="cmt-sec"><i className="far fa-user-circle"></i><li className="cmnt-per">{comment.body.slice(1, 20)}</li></div></ul>)
                      }
                      <input className="inpt" type="text" placeholder="Add a comment" onChange={this.onUserCmt}></input>
                      <Button className="add-cmt" variant="primary" onClick={this.addCmnts}>Add</Button>
                      </div>
                      
                     : <></>}


                </Card.Text>
              </Card.Body>
            </Card>)
        }) : null}
      </div>
    );
  }
}
