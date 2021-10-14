import React, { Component } from 'react'

export default class EditUser extends Component {
   constructor(props) {
     super(props);
     this.state = {
       id : this.props.edituserstate.id,
       name : this.props.edituserstate.name,
       phone : this.props.edituserstate.phone,
       Quyen : this.props.edituserstate.Quyen
     }
   }
   isChange = (event) => {
     const name = event.target.name;
     const value = event.target.value;
     this.setState ({
       [name]:value
     });
   }
   savebutton = () => {
     let info = {};
     info.id = this.state.id;
     info.name = this.state.name;
     info.phone = this.state.phone;
     info.Quyen = this.state.Quyen;
     this.props.getuseredit(info);
     this.props.buttonchangeuser2();
   }
    render() {
      // console.log(this.state);
        return (
          
                <form >
               <div className="btn-warning">
                <div className="form-group">
                  {/* <label htmlFor="exampleInputEmail1"  className="form-label">Ten Nguoi dung</label> */}
                  <input onChange ={(event)=>this.isChange(event)} defaultValue={this.props.edituserstate.name } type="text"  name="name"  className="form-control" placeholder="Name..." aria-label="Name"/>
                </div>
                <div className="form-group">
                <input onChange ={(event)=>this.isChange(event)} defaultValue={this.props.edituserstate.phone} type="text"  name="phone"  className="form-control" placeholder="Phone..." aria-label="Phone" />
                </div>
                <div className="form-group">
                <select onChange ={(event)=>this.isChange(event)} defaultValue={this.props.edituserstate.Quyen} className="form-select" aria-label="Default select example"  name="Quyen" >
                  {/* <option Selected>Choose my Role</option> */}
                  <option value={0}>Choose your Role </option>
                  <option value={1}>Admin</option>
                  <option value={2}>Moderator</option>
                  <option value={3}>Member</option>
                </select>
                </div>
                <button type="button" onClick = {()=>this.savebutton()} className="btn btn-labeled btn-primary">Edit</button>
                </div>
            </form>
                
      
        )
    }
}
