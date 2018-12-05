import React, { Component,Fragment } from 'react'
import TopNav from '../Layout/TopNav'
import SideNav from '../Layout/SideNav'
import Home from '../Activity/Home' 
import APIModule from '../Activity/APIModule' 
import APISubModule from '../Activity/APISubModule'

export default class View extends Component {
  constructor(){
    super()
    this.state = {
        windowWidth : window.innerWidth,  
        toggleSideNav : false,  
        pageDetails:null,          
        pageName: 'WelcomePage'      
    }    
} 

changeLink=(e)=>{
  const act = e.target.getAttribute('data-name')
  this.setState({value:act})
  // console.log(act)
}  
 
componentDidMount(){
this.updateDimension()
window.addEventListener('resize',this.updateDimension)

}

componentWillUnmount(){
  this.updateDimension()
  window.addEventListener('resize',this.updateDimension)  
}

// toggleBtn=()=>{
// this.setState({ toggleSideNav: !this.state.toggleSideNav })
// }

updateDimension=()=>{
this.setState({windowWidth : window.innerWidth})
}

doParentToggle=(toggleVal)=>{
  // console.log(toggleVal)
this.setState({toggleSideNav : toggleVal})

}

getDesc=(details)=>{
  // console.log(details)
  this.setState({
    pageDetails:details,
    pageName:details.api_type
  })
 
}
 
showList=(e)=>{
// console.log('1111')
//   const buttonName = e.target.getAttribute("data-name")
//   console.log(buttonName)
//   this.setState({
//    isStakehList:buttonName
//  })
 
const url = 'http://localhost:8000/api/apiList'
fetch(url).then(res=>res.json())
.then(res=>{
  // console.log(res[1].desc)
  this.setState({
    isStakehList: res[1].name
  })
})
}

components={
  'WelcomePage' : Home,
  'API Module' : APIModule,
  'API Sub Module': APISubModule 
}

  render() {
    
    const Page=this.components[this.state.pageName]

    return (
      <Fragment>        
        <SideNav toggleSideNav={this.state.toggleSideNav} windowWidth={this.state.windowWidth} activityList={this.changeLink} getDesc={this.getDesc}/>
        <div className={this.state.toggleSideNav ? this.state.windowWidth > 1194 ? 'page active' : 'page active-sm' : 'page'}>
           <TopNav toggleSideNav={this.state.toggleSideNav} doParentToggle={this.doParentToggle} /> 
           <Page apiModule={this.state.pageDetails}/>
        </div>       
      </Fragment>
    )
  }
}
