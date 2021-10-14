import React, { Component } from 'react'
import './Admin.css';


export default class Adduser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai: false
  }
  }
  thaydoitrangthai = () => {
    this.setState({
      trangthai : !this.state.trangthai
    })
  }
  hienthinut = () =>{
    
    if (this.state.trangthai){
      return  <div type="button" onClick = {()=> this.thaydoitrangthai()} className="btn btn-labeled btn-danger">Dong</div>;
    }
    else{
      return  <div type="button" onClick = {()=> this.thaydoitrangthai()} className="btn btn-labeled btn-info">Them</div>
      }
    }
    hienthiform = () => {
      if (this.state.trangthai){
        return  (
          <form>
              <div className="backgroundright">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Ten Nguoi dung</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">SDT</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>

        )
      }
      
      
    }
  
  
    render() {
        return (
           <div className="col-md-6">
              <br />
          {this.hienthinut()}
          {this.hienthiform()}
            </div>
          
        )
    }
}
