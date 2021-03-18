import React, { Component } from "react";
import Register from "../../components/register"
import { auth } from "../../utils/firebase";

export default class RegisterPage extends Component {

  constructor(){

    super();

    
    //state
    this.state = {
      firstname:"",
      lastname:"",
      email:"",
      password:"",
      confirmedPassword:""
    }
  }


  render() {
    return <Register handleChange = {this.handleChangeInput} handleSubmit={this.signup} />;
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
     }
     else if(this.state.confirmedPassword != this.state.password){

      alert("Veuillez Saisir le meme mot de passe hihi 🤣 !!");

     }else {

      // communiquer avec firebase pour s'inscrir 
      auth.createUserWithEmailAndPassword(this.state.email,this.state.password).then((response)=>{

        console.log(response)

      })

     }



  }

  //--- handle change input 
  handleChangeInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    console.log(name,value)
    //--changer state 
    this.setState({[name]:value})
  }





}
