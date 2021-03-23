import React, { Component } from 'react'
import AuthContext from '../shared/auth/auth-context'

export default class LmsPage extends Component {
    render() {
        return ( 
           <div className="text-center bg-primary text-white">
               front page !!
            </div>
        )
    }
}

LmsPage.contextType=AuthContext;
