import axios from 'axios'
import React, { Component } from 'react'
import "../css/Profile.css"

export class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: localStorage.getItem('User'),
            userProfiles: [],
            profileImg: []
        }
    }

    // handleLogOut = () => {
    //     // this.props.loggin()
    //     this.setState({ user : localStorage.getItem('User') })
    // }



    // shouldComponentUpdate(prevState)
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ userProfiles: response.data.slice(0, 8) })
            })
            .catch((error) => {
                console.log(error)
            })

        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
            this.setState({ profileImg : response.data.slice(0, 8)})
        })
        .catch((error) => {
            console.log(error)
        })        
    }


    retrieveValues = () => {
        var arr = JSON.parse(localStorage.getItem('User'));
        console.log(arr)
    }

    render() {
        return (
            <>
                <div className="prf-sec">
                    <div className="prf">
                        <div className="avtr">
                            {/* <i class="far fa-user-circle"></i> */}
                            <img src="https://t4.ftcdn.net/jpg/03/32/59/65/240_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg" />
                        </div>
                        <div className="prf-dtls">
                            {/* <div className="usr-1" >{localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')).user : "No User"}</div>
                             <div className="dtls-1">{localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')).mail : "No User"}</div> */}
                            <div className="usr-1" >{this.props.chck ? JSON.parse(localStorage.getItem('User')).user : "No User"}</div>
                            <div className="dtls-1">{this.props.chck ? JSON.parse(localStorage.getItem('User')).mail : "No User"}</div>
                        </div>
                    </div>

                    


                    {this.props.chck ? <div><div className="sgts">Suggestions For You</div> <div className="prf-usr">
                    {this.state.userProfiles.length && this.state.profileImg.length ? this.state.userProfiles.map((profile, index) => {

                        const profImg = this.state.profileImg[index]
                        return (
                            
                            <div className="prf-sgts">
                                <div className="avtr">
                                    {/* <i class="far fa-user-circle"></i> */}
                                    <img src={profImg.thumbnailUrl} />
                                </div>
                                <div className="prf-dtls">
                                    <div className="usr-1" >{this.props.chck ? profile.username : "No User"}</div>
                                    <div className="dtls-1">{this.props.chck ? profile.name : "No User"}</div>
                                </div>
                                <div class="add-frnd">
                                <i class="fas fa-user-plus"></i>
                                </div>
                            </div>
                            
                        )
                    }) : null}
                    </div></div> : null}
                    

                </div>
            </>
        )
    }
}

export default Profile