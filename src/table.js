import React, { Component } from 'react'
import Tablerow from './tablerow'

export default class Table extends Component {
//không có dấu ngoặc nhọn ở arrow funcntion là vì mang ý nghĩa trả về


  mappinguser = () => this.props.adddata.map((value,key) =>(
    <Tablerow buttonchangeuser2 = {()=> this.props.buttonchangeuser()} edittablerow = {(user)=> this.props.editusertable(value)} 
    username = {value.name} tel = {value.phone} role = {value.Quyen} stt= {key} key={key} id = {value.id}
    deleteuserclick2 = {(iduser) => this.props.deleteuserclick3(iduser)}
    />
  ))


 
    render() {
      
        return (
          <div className="col">
            <div>
                <table className="table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Ho ten</th>
                    <th scope="col">Dien Thoai</th>
                    <th scope="col">Quyen</th>
                    <th scope="col">Thao tac</th>
                  </tr>
                </thead>
                <tbody>
                  {this.mappinguser()}

                  
                </tbody>
              </table>

            </div>
          </div>
        )
    }
}
