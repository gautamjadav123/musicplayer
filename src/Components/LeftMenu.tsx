import React, { Component } from 'react'
import "../Styles/leftMenu.css";
import { Menu } from './Menu';
import { MenuList } from './MenuList';
import {FaEllipsisH} from 'react-icons/fa';
import {BsBugFill} from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi';
import  {MenuPlayList} from './MenuPlayList'
import { TrackList } from './TrackList';

class LeftMenu extends Component<any, any> {
   key = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5b60bd2be1mshe8a3162aadca832p1be917jsnd6222aed7df1',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  constructor(props:any){
    super(props)
    this.state={
      searchData:null,
      noData:false,
    }
  }
  search(key:any){
    console.warn(key)
    fetch("https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5"+key).then((data)=>{
      data.json().then((resp)=>{
        console.warn("resp",resp)
        if(resp.lenght>0)
        {
          this.setState({searchData:resp,noData:true})
        }
        else
        {
          this.setState({noData:true,searchData:null})
        }
      })
    })
  }
  render(){
    return (
      <div className='leftMenu'>
        <div className="logoContainer">
          <i><BsBugFill/></i>
          <h1>VIRUS</h1>
          <i><FaEllipsisH/></i>
        </div>
        <div className="searchBox">
            <input type="text" placeholder='Search' onChange={(event)=>this.search(event.target.value)}/>
            <div>
              {
                this.state.searchData?
                <div>
                  {
                    this.state.searchData.map((item:any)=>
                    <div>{item.tilte}</div>
                    )
                  }
                </div>
                :null
              }
              {
                this.state.noData?<h5>No Data Found</h5>:null
              }
            </div>
            <i>
              <BiSearchAlt/>
            </i>
        </div>
        <Menu title={"Menu"} menuObject={ MenuList }/>
  
        <MenuPlayList/>
        <TrackList/>
      </div>
    )
  }
}

export  {LeftMenu};
