import React, { Component,Fragment } from 'react' 
import { Collapse } from 'reactstrap'; 
import update from 'immutability-helper' 
 
 
export default class SideNav extends Component {
  constructor() {
    super();     
    this.state = {
      collapse: false,
      open: true,
    //   menuItem : [
    //   {
    //     tittle : 'Get List of Activity',
    //     name: 'second',
    //     isActive: false, 
    //   },
    //   {
    //     tittle : 'Get List Activity of Subject',
    //     name: 'third',
    //     isActive: false,
    //   },
    //   {
    //     tittle : 'Post Add Activity',
    //     name: 'fourth',
    //     isActive: false,
    //   },
    //   {
    //     tittle : 'Post Update Activity',
    //     name: 'fiffth',
    //     isActive: false,
    //   },
    //   {
    //     tittle : 'Delete Activity',
    //     name: 'sixth',
    //     isActive: false,
    //   },
    //  ],

     apiList: [],
     activeMenu:''

    };
  } 

  componentDidMount(){
  const url = "http://localhost:8000/api/apiList"
  fetch(url).then(res=>res.json())
  .then(res=>{
 
    const listCollapse = Object.assign({}, ...res.map(itm => ({['collapse'+itm.details.name]:false})))
    
    this.setState({
      apiList: res,
      ...listCollapse
    })
  })
  

  }

  isActiveLink=(e)=>{
    // this.props.activityList(e)
    // const {menuItem} = this.state
    // const itmIdx = menuItem.findIndex(itm=>itm.name === e.target.getAttribute('data-name'))
    // const desIdx = menuItem.findIndex(itm=>itm.isActive===true)

    // // console.log(itmIdx)

    // const newMenuList = desIdx === -1?
    // update(menuItem,{
    //   [itmIdx]:{isActive:{$set:true}}
    // })
    // :update(menuItem,{
    //   [itmIdx]:{isActive:{$set:true}},
    //   [desIdx]:{isActive:{$set:false}}
    // })

    // // console.log(newMenuList)

    // this.setState({
    //   menuItem: newMenuList
    // })

    const recId=e.target.getAttribute('data-id')
    const dataName = e.target.getAttribute('data-name')
    const ki =this.state[dataName]
    const apiDetails = ki.find(rec=>rec.record_id===recId)    
    console.log(apiDetails)
    this.props.getDesc(apiDetails)
    // console.log(recId,dataName)
     

    
  }
  
  activated=(e)=>{
    console.log(e.target.getAttribute("data-name"))
  }

fallDown=(e)=>{  
  e.preventDefault()

  const recId=e.target.getAttribute('data-id')
    const ki =this.state.apiList
    const apiDetails = ki.find(rec=>rec.record_id===recId)    
    this.props.getDesc(apiDetails)
  

  const stateName=e.target.getAttribute("data-name")
  const collapseState =!this.state['collapse'+stateName]
  this.setState({ ['collapse'+stateName]: collapseState, activeMenu:e.target.getAttribute("data-id") });
  
  const url = "http://192.168.0.110:8000/api/apiList/"+e.target.getAttribute("data-id")
  if(this.state[stateName]===undefined){
    
    fetch(url).then(res=>res.json())
    .then(res=>{
      // console.log(res)
      this.setState({
        [stateName]: res
      })
    })
  }

  
}


  render() {   

    const {menuItem,apiList}=this.state 

    return (
      <Fragment>  
                        
      <nav className={this.props.toggleSideNav ? this.props.windowWidth > 1194 ? 'side-navbar shrink' : 'side-navbar show-sm' : 'side-navbar'}>
      <div className="side-navbar-wrapper">      
        

        <div className="sidenav-header d-flex align-items-center justify-content-center">
       
          <div className="sidenav-header-inner text-center"><img src={require("../logo.svg")} alt="person" className="img-fluid rounded-circle"/>
            <span className='text-primary'>Bioris CORS Gateway</span>
          </div>
         
          <div className="sidenav-header-logo"><a className="brand-small text-center"><img src={require("../logo.svg")} alt="person"/></a></div>
        </div>

        <div className="main-menu">
          <h5 className="sidenav-heading text-center">Main</h5>
          <ul id="side-main-menu" className="side-menu list-unstyled">
          
            {apiList.map((itm,idx)=>
            <li key={idx}>
              <a onClick={this.fallDown} data-id={itm.record_id} data-name={itm.details.name}>
                <i className="icon-page" data-id={itm.record_id} data-name={itm.details.name}></i>{decodeURIComponent(itm.title)}
              </a>
              <Collapse isOpen={this.state['collapse'+itm.details.name]}>
                {
                  this.state[itm.details.name]!==undefined?this.state[itm.details.name].map((itm,idx)=>
                  <strong key={idx} onClick={this.isActiveLink} data-id={itm.record_id} data-name={itm.details.name}>
                    <strong><a className={itm.details.name} data-id={itm.record_id} data-name={itm.details.name}>{decodeURIComponent(itm.title)}</a></strong> 
                  </strong>):''               
                }
              </Collapse>
            </li> )}
          </ul>        
        </div>
      </div> 
    </nav>
     
      </Fragment>
      
    )
  }
}
