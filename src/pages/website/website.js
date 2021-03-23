import React, { Component } from 'react'
import AuthContext from '../../shared/auth/auth-context'

export default class WebsitePage extends Component {
    render() {
        return ( 
           <h1> Website eshop.com</h1>
        )
    }
}

WebsitePage.contextType=AuthContext;
