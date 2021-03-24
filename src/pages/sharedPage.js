import React, { Component } from 'react'
import AdminPage from '../shared/adminPlace'
export default class AdminPlace extends Component {

    constructor(){
        super()
        this.state={}
    }
    render() {
        return (
          <AdminPage
          
          />
        )
    }

    handleLogout= ()=>{
        alert(1)
    }
}
