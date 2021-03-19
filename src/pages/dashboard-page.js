import React, { Component } from 'react'
import AuthContext from '../shared/auth/auth-context'

export default class DashboardPage extends Component {
    render() {
        return (
            <div className="text-center bg-primary text-white">
                   Hi  {this.context.currentUser.displayName} 😄 !!
                <button onClick={this.context.logout} className="btn btn-danger">Deconecter</button>

            </div>
            
        )
    }
}

DashboardPage.contextType = AuthContext;

