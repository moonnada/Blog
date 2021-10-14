import { Link } from "react-router-dom";
import React, { Component } from 'react'
import "./topbar.css"

export default class Topbar extends Component {
 
    render() {
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"> <Link className="link" to="/" >HOME</Link> </li>
                    <li className="topListItem"> <Link className="link" to="/" >CONTACT</Link> </li>
                    <li className="topListItem"> <Link className="link" to="/write" >WRITE</Link> </li>
                </ul>
            </div>

            <div className="topRight">
                {this.props.auth.isAuthenticated && this.props.auth.user && (
                    <p >
                        Hello { this.props.auth.user.username }
                    </p>
                )}

                <div >
                    {!this.props.auth.isAuthenticated && (
                    <ul className="topList">
                        <li className="topListItem"><a href="/register" className="link">Register </a> </li>
                        <li className="topListItem"> <a href="/login" className="link"> Log in </a></li>
                    </ul>
                    )}
                    {this.props.auth.isAuthenticated && (
                        <li className="topListItem"><a href="/" className="link">Log Out</a> </li>
                    )}
              </div>

            </div>
        </div>
    )
}
}
