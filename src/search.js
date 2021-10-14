import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempvalue: '',
            userobj: {}
        }
    }
    
    

    whatsearch = (event)=>{
        const noidung = event.target.value;
        this.setState({
            tempvalue: noidung
            
            
            
        })
        this.props.thuketnoi(this.state.tempvalue)
        // console.log(noidung+"2")

    }
    getuseredit = (info) => {
        this.setState ({
            userobj: info
        });
        this.props.getusereditapp(info);
        // console.log('In ra search' + info)
    }
    isshow = () => {
        if (this.props.edituser === true) {
           return <EditUser getuseredit = {(info) => this.getuseredit(info)}edituserstate={this.props.edituserstate} buttonchangeuser2 = {()=>this.props.buttonchangeuser()}/>
        }
    }   

    render() {
        console.log(this.state.userobj)
        return (
   
       
     
        <div className="col-12">
            <form className="row">

          
            <div className="col-4">
             <input name="search" onChange = {(event)=>this.whatsearch(event)}  type="text" className="form-control" placeholder="Search" aria-label="Search2" />
             </div>
              
           
             <div className="col-4">

         

            <button type="button"  onClick={(dl)=>this.props.thuketnoi(this.state.tempvalue)} className="btn btn-labeled btn-primary">Search</button>
            </div>
            </form>
            <div className="row">
                <div className="col-12">
                {this.isshow()}

                </div>
            </div>
            </div>
        
        
       
       
        )
    }
}
