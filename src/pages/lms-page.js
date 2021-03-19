import React, { Component } from 'react'
import AuthContext from '../shared/auth/auth-context'

export default class LmsPage extends Component {
    render() {
        return (
            <div className="text-center bg-primary text-white">
                Hi  {this.context.currentUser.displayName} 😄 !!
                <button className="btn btn-danger">Deconecter</button>
            </div>
        )
    }
}

LmsPage.contextType=AuthContext;
