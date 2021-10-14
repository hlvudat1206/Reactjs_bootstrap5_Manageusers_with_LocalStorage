import React, { Component } from 'react'

export default class Tablerow extends Component {
  constructor(props) {
    super(props);
    
  }
  

  
  transrole = () => { 
   if (this.props.role.toString() === "1") {
     return "Admin";
    } else if (this.props.role.toString() === "2") {
    return "Moderator";
   } else {
    return "Member";
   }
  }
  edituserclick = ()=> {
    this.props.edittablerow();
    this.props.buttonchangeuser2();
  }
  deleteuserclick = (iduser) =>{
    this.props.deleteuserclick2 (iduser);
  }


    render() {
        return (
          
     
                <tr>
                    <td >{this.props.stt+1}</td>
                    <td>{this.props.username}</td>
                    <td>{this.props.tel}</td>
                    <td>{this.transrole()}</td>
                    <td>
                      <button  onClick = {() => this.edituserclick()} type="button" className="btn btn-labeled btn-warning">Sua</button>
                      <button onClick = {(iduser) => this.deleteuserclick(this.props.id)}type="button" className="btn btn-labeled btn-danger">Xoa</button>
                    </td>
                  </tr>
     
        )
      }
  
    }
  

