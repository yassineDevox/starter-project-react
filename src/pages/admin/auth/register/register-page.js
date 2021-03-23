import React, { Component } from "react";
import Register from "../../components/register";
import AuthContext from "../../shared/auth/auth-context";
import { auth } from "../../utils/firebase";

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);

    //state
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmedPassword: "",
    };
  }

  render() {
    return (
      <Register
        handleChange={this.handleChangeInput}
        handleSubmit={this.signup}
      />
    );
  }

  //--- signup
  signup = (event) => {
    // ne pas acctualiser la page
    event.preventDefault();

    //vider les inputs du formulaire
    event.target.reset();

    // validation du formulaire

    if (
      this.state.firstname == "" ||
      this.state.lastname == "" ||
      this.state.email == "" ||
      this.state.password == "" ||
      this.state.confirmedPassword == ""
    ) {
      alert("Veuillez remplir toutes les champs du formulaire 😑😠");
    } else if (this.state.confirmedPassword != this.state.password) {
      alert("Veuillez Saisir le meme mot de passe hihi 🤣 !!");
    } else {
     
      //----utiliser register du auth-context
      this.context.register(this.state.email,this.state.password).then((response)=>{
        
        //if user is registred
        auth.onAuthStateChanged((user)=>{

          user.updateProfile({
            displayName:this.state.firstname+" "+this.state.lastname
          })
          
          console.log(user)
        })


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

//liaison avec authProvider
RegisterPage.contextType=AuthContext;