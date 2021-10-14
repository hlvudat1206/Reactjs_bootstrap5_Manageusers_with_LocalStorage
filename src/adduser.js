import React, { Component } from 'react'
import './Admin.css';


export default class Adduser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trangthai: false,
      id: "",
      name: "",
      phone: "",
      Quyen: ""
  }
  }
  thaydoitrangthai = () => {
    this.setState({
      trangthai : !this.state.trangthai
    })
  }

  hienthinut = () =>{
    
    if (this.state.trangthai === true){
      return  <div type="button" onClick = {()=> this.thaydoitrangthai2()} className="btn btn-labeled btn-danger">Dong</div>;
    }
    else{
      return  <div type="button" onClick = {()=> this.thaydoitrangthai2()} className="btn btn-labeled btn-info">Them</div>
      }
    }

    hienthinut2 = () =>{
    
      if (this.props.hienthiform2 === true){
        return <div><button type="button"  onClick = {()=> this.props.ketnoi2()} className="btn btn-labeled btn-danger">Dong</button></div>
      }
      else{
        return <div><button type="button"  onClick = {()=> this.props.ketnoi2()} className="btn btn-labeled btn-info ">Them</button></div>

        }
      }
    hienthiform = () => {
      if (this.state.trangthai){
        return  (
          <div>
          <button type="button" onClick = {()=>this.props.ketnoi2()} className="btn btn-labeled btn-warning">Ket noi</button>
          <button type="button" onClick = {()=>this.props.ketnoi2()}  className="btn btn-labeled btn-info">Them</button>
        
          {/* <form>
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
            </form> */}
            <form>
              <div className="backgroundright">
                <div className="mb-3">
                  {/* <label htmlFor="exampleInputEmail1"  className="form-label">Ten Nguoi dung</label> */}
                  <input  name="name" type="text" className="form-control" placeholder="Name..." aria-label="Name" />
                </div>
                <div className="mb-3">
                <input name="phone" type="text" className="form-control" placeholder="Phone..." aria-label="Phone" />
                </div>
                <div className="mb-3">
                <select className="form-select" aria-label="Default select example" onChange = {(event)=>this.isChange(event)} name="Quyen">
                  <option selected>Choose my Role</option>
                          
                  <option value={1}>Admin</option>
                  <option value={2}>Moderator</option>
                  <option value={3}>Member</option>
                </select>
                  </div >
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
            </div>
        )
      }
      
      
    }
    isChange = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      // console.log(value);
      this.setState({
        [name]: value
      })
      // let item = {};
      // item.id=this.state.id;
      // item.name=this.state.name;
      // item.phone=this.state.phone;
      // item.Quyen=this.state.Quyen;


  
    }
  kiemtratrangthai = () => {
      
    if (this.props.hienthiform2) {
      return <div>
         <div>
         {/* <button type="button"  onClick = {()=> this.props.ketnoi2()} className="btn btn-labeled btn-danger">Dong</button> */}
        
          <form>
              <div className="backgroundright">
               
                <div className="mb-3">
                  {/* <label htmlFor="exampleInputEmail1"  className="form-label">Ten Nguoi dung</label> */}
                  <input type="text" onChange = {(event)=>this.isChange(event)} name="name"  className="form-control" placeholder="Name..." aria-label="Name"/>
                </div>
                <div className="mb-3">
                <input type="text" onChange = {(event)=>this.isChange(event)} name="phone"  className="form-control" placeholder="Phone..." aria-label="Phone" />
                </div>
                <div className="mb-3">
                <select className="form-select" aria-label="Default select example" onChange = {(event)=>this.isChange(event)} name="Quyen" >
                  {/* <option Selected>Choose my Role</option> */}
                  <option value={0}>Choose your Role </option>
                  <option value={1}>Admin</option>
                  <option value={2}>Moderator</option>
                  <option value={3}>Member</option>
                </select>
                </div>
                <button type="reset" onClick = {(name,phone,Quyen)=> this.props.add(this.state.name,this.state.phone,this.state.Quyen)} className="btn btn-labeled btn-primary">Submit</button>
             
              </div>
            </form>
            </div>
      </div>
    }else {
      // <button type="button"  onClick = {()=> this.props.ketnoi2()} className="btn btn-labeled btn-info">Them</button>

    }
  }

    render() {
      // console.log(this.props.hienthiform2);
      // console.log(this.state);
        return (
          //  <div className="col-md-6">
          <div className="col-12">
            {/* Hai button co kha nag dieu khien True False thong qua Props */}
          
              <br />
          {this.hienthinut2()}
          {/* {this.hienthiform()} */}
          {this.kiemtratrangthai()}
          
          
            </div>
       
        )
    }
}
