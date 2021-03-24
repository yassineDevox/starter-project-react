import React, { Component } from 'react'
import AuthContext from '../shared/auth/auth-context'
import Products from '../components/products'
export default class ProductsPage extends Component {
    render() {
        return (
            
             <Products/>
           
        )
    }
}

ProductsPage.contextType=AuthContext;