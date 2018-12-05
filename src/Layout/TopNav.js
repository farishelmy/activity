import React, { Component,Fragment } from 'react'
 
export default class TopNav extends Component {
  constructor(){
    super()
    this.state = {
        collapse : false        
    }    
 

}
  
toggleBtn=(e)=>{
  e.preventDefault()
  const toggleSide = !this.props.toggleSideNav
  // console.log(this.props.toggleSideNav)
  this.props.doParentToggle(toggleSide)
}

  render() {
    return (
      <Fragment>        
      <header className="header">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-holder d-flex align-items-center justify-content-between">
              <div className="navbar-header"><a onClick={this.toggleBtn} className="menu-btn"><i className="icon-bars"> </i></a><a href="" className="navbar-brand">
                  <div className="brand-text d-none d-md-inline-block"><span className="text-primary">Bioris CORS Gateway</span></div></a></div>
              </div>
            </div>
          </nav>          
        </header>   
      </Fragment>
    )
  }
}
