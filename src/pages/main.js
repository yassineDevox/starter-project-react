import axios from "../utils/axios";
import React, { Component } from "react";
import Main from "../components/main";
import Mainmodel from "../models/model";
export default class main extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      avatar: "",
      id: "",
      updatedPerson_id:-1,
      iconName:"fas fa-plus p-1",
      btnName:"ADD",
      action:"add",
      list_people: [],
    };
  }
  render() {
    return (
      <Main
        all_data={this.state.list_people}
        addContent={this.add}
        change={this.handleChange}
        name={this.state.name}
        avatar={this.state.avatar}
        delete={this.handleDelete}
        icon={this.state.iconName}
        btn={this.state.btnName}
        edit={this.editPeople}
        action={this.state.action}
        submitEdit={this.SubmitEdited}
      />
    );
  }


 componentDidMount(){
axios.get("people.json").then((response)=> {
  if (response.data != null) {
      let keys = Object.keys(response.data)

   let extraList = keys.map((k)=> {

    let nP = new Mainmodel(
        
        response.data[k].name,
        response.data[k].avatar,
        k
    )
    return nP
   })
    // add to list
    this.setState({list_people : extraList})



  }

})
  }

  handleChange = (event) => {
    let value = event.target.value;
    let input = event.target.name;

    this.setState({ [input]: value });
  };

  add = (event) => {
    //so the form doesnt refresh
    event.preventDefault();
    //so the inputs get emptied
    event.target.reset();

    //condition so user fills entire form
    if (this.state.name === "" || this.state.avatar === "") {
      alert("enter all info");
    }

    //adding stuff
    else {
      let List = this.state.list_people;
      //adding through a model
      let newPerson = new Mainmodel(
        this.state.name,
        this.state.avatar,
        this.state.id
      );
      //emtying the inputs
      this.setState({
        name: "",
        avatar: "",
      });
      //pushing in a list created in the state
      List.push(newPerson);
      this.setState({ list_people: List });


      // adding the people to firebase
      let data_people = {
        name: newPerson.nickname,
        avatar: newPerson.avatar,
      };

      axios.post("people.json", data_people).then((response) => {
        let new_id = response.data.name;
  console.log(new_id)

        // looking for person with id=0 in the list

        let newerList = this.state.list_people;
        newerList.forEach((P) => {
          if (P.id === 0) P.id = new_id;
        });
        // modify the state
        this.setState({ list_people:newerList})
      });
      console.log(this.state.name)
    }
  };





  handleDelete = (idPerson) => {
      let choiceToDelete=window.confirm("do you really want it deleted")

      if (choiceToDelete=== true){ 
          
    axios.delete("people/" + idPerson +".json").then(()=>{
        let AllList = this.state.list_people.filter(
            (d)=>d.id !== idPerson
        )
        
        this.setState({list_people:AllList})
            })
          };}
   
   
  editPeople=(updatedPerson)=>{
    this.setState({ btnName:"Edit"})
    this.setState({iconName:"fas fa-edit p-1"})
    this.setState({action:"edit"})
    //adding info to the state
    this.setState({
         name:updatedPerson.name,
         avatar:updatedPerson.avatar,
         updatedPerson_id: updatedPerson.id
    })
  }

  SubmitEdited=(event)=>{
    // ne pas acctualiser la page
    event.preventDefault();
     //partie data a envoyer a firebase
     const people_data = {
      name: this.state.name,
      avatar: this.state.avatar,
     }
    // data to send to firebase 
    axios
    .put("people/" + this.state.updatedPerson_id + ".json", people_data)
    .then((response) => {
      //changer la personne dans la liste
      let newList = this.state.list_people;
      newList.forEach((s) => {
        if (s.id === this.state.updatedPerson_id) {
          s.name = response.data.name;
          s.avatar = response.data.avatar;
        }
      });

      // modifier la liste du state
      this.setState({ list_people: newList });
     

      // vider le formulaire
      event.target.reset();

      //vider les variables state
      this.setState({
        name: "",
      avatar: "",
      updatedPerson_id:"-1",
      iconName:"fas fa-plus p-1",
      btnName:"ADD",
      action:"add",
       
      });
    });


   
}
  
}