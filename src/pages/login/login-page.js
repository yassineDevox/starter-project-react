import React, { Component } from "react";
import Login from "../../components/login";
import AuthContext from "../../shared/auth/auth-context";

export default class LoginPage extends Component {

  constructor(){
    super()
    this.state = {
      email:"",
      password:""
    }
  }
  render() {
    return <Login 
              handleChange={this.handleChangeInput} 
              handleSubmit={this.signIn} 
            />;
  }

  
  //--- signin
  signIn = (event) => {
    // ne pas acctualiser la page
    event.preventDefault();

    //vider les inputs du formulaire
    event.target.reset();

    // validation du formulaire

    if (
      this.state.email == "" ||
      this.state.password == ""
    ) {
      alert("Veuillez remplir toutes les champs du formulaire 😑😠");
    }else {
     
      //----utiliser register du auth-context
      this.context.login(this.state.email,this.state.password).then((response)=>{
        console.log(response)

      }).catch((error)=>{
        alert(error.message)
      })

    }
  };


   //--- handle change input
   handleChangeInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    console.log(name, value);
    //--changer state
    this.setState({ [name]: value });
  };


}

LoginPage.contextType = AuthContext;
