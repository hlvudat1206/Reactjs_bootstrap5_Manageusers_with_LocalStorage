import React, { Component } from 'react'
import Title from './title'
import Table from './table'
import Search from './search'
import Adduser from './adduser'
import './Admin.css';
import DataUser from './data.json';
import { v4 as uuidv4 } from 'uuid';
import EditUser from './EditUser'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienthiform2 : true,
      data: [],
      searchtext: '',
      edituserstatus: false,
      edituserstate: {}
     
  }
}

componentDidMount() { //Khi bật phần mềm lên thì data tự đổ ra dữ liêu
  if(localStorage.getItem('userData')===null){ //Lấy dữ liệu từ data xem có không
    localStorage.setItem('userData',JSON.stringify(DataUser)); //nếu ko có thì set vào 

  }else {
    let temp = JSON.parse(localStorage.getItem('userData')) // ngược lại nếu có rồi thì lấy ra nhưng phải mã hóa parse
    this.setState({
      data:temp
    });
  }
}

changeuserstatus = () => {
  this.setState({
    edituserstatus: !this.state.edituserstatus
  })
}
  thaydoitrangthai2 = () => {
    this.setState({
      hienthiform2 : !this.state.hienthiform2
    });
  }
  
  thongbao = ()  => {console.log('ket noi thanh cong');}
  thongbao2 = () => {alert('Connect thanh cong')}
  gettextsearch = (dl) => {
    this.setState({
      searchtext:dl
    });

    console.log('ketnoidulieu '+ this.state.searchtext);}
  getdataNewUser = (name,phone,Quyen) => {
    // alert(name);
    // alert(phone);
    // alert(Quyen);
    // console.log(name);
    // console.log(phone);
    // console.log(Quyen);
      let item = {}
      item.id = uuidv4();
      item.name = name;
      item.phone = phone;
      item.Quyen = Quyen;
      console.log(item);
    let items = this.state.data;
    items.push(item)
    console.log(items);
    this.setState({
      data: items       //de khi search, code dựa vào this.state.data.forEach nên phải update lại data trong State
    });
    localStorage.setItem('userData',JSON.stringify(items)); //Updata data vao localStorage

  };

  edituser = (user) => {
    console.log("Ket noi 2 component thanh cong");
    console.log(user);
    this.setState({
      edituserstate: user
    });
  }
  getusereditapp = (info) => {
    // console.log('in ra info '+ info);
    console.log('in ra info name'+ info.name);
    console.log('in ra info phone'+ info.phone);

    this.state.data.forEach((value,key)=>{
      if (value.id === info.id){
        value.name = info.name;
        value.phone = info.phone;
        value.Quyen = info.Quyen;
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data)); //Updata data vao localStorage

  }
    //render///////////////////////////////
    deleteuserclick= (iduser) => {
      
      console.log('in in in ' + iduser)
      // const y = [1,2,3];
      // const x = 2;
      // let p = [];
      // p.push(y.filter(item => item != x));
      // console.log('in ra p: ' + p)

      let tempData = this.state.data;
      tempData = tempData.filter(item2 => item2.id !== iduser);

      this.setState({
        data: tempData
        
      });
      localStorage.setItem('userData',JSON.stringify(tempData)); //Updata data vao localStorage
    }  
   
    render(){
  
      // localStorage.setItem("Vu Dat","Handsome")
      // console.log(localStorage.getItem("Vu Dat"))
      // localStorage.removeItem("Vu Dat")
      // localStorage.setItem('userData',JSON.stringify(Datauser));
      let ketqua = [];
      this.state.data.forEach((item) =>{ 
        if (item.name.indexOf(this.state.searchtext) !== -1){
          ketqua.push(item);
        }
      });
     
        return (

            <div>
                <Title/>
                <div className="searchForm">
                <div className="container">
                <div className="row">
                {/* chỗ truyền ngược lại dl đầu tiên */}
                <Search getusereditapp = {(info) => this.getusereditapp(info)} edituserstate={this.state.edituserstate} buttonchangeuser = {()=> this.changeuserstatus()} edituser={this.state.edituserstatus} thuketnoi = {(dl)=>this.gettextsearch(dl)} /> 
            
                <Adduser add = {(name,phone,Quyen) => this.getdataNewUser(name,phone,Quyen)}  ketnoi = {() => this.thongbao()} ketnoi2 = {() => this.thaydoitrangthai2()} hienthiform2 = {this.state.hienthiform2}/>

                <Table deleteuserclick3 = {(iduser) => this.deleteuserclick(iduser)} buttonchangeuser = {()=> this.changeuserstatus()} editusertable ={(user) => this.edituser(user)} adddata = {ketqua}/>

            
                </div>
        
            

                  </div>
                </div>
             
   
               


               
            </div>
        )
    }
}


