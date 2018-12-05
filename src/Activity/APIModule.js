import React, { Component,Fragment } from 'react'
import { Button } from 'reactstrap'
  
export default class ActivityList extends Component {
  
  subLink=(e)=>{
    const recId=e.target.getAttribute('data-id')
    console.log(recId)
    // const ki =this.state.apiList
    // const apiDetails = ki.find(rec=>rec.record_id===recId)    
    // this.props.getDesc(apiDetails)

  }

  render() {

    const apiModule = this.props.apiModule

    return (
      <Fragment>
        <section>
          <div>
            <h3 className="mt-4 ml-5 text-primary">{apiModule===null?'':decodeURIComponent(apiModule.title)}</h3>
              <p className="mt-2 ml-5 mr-5 text-justify">{apiModule===null?'':decodeURIComponent(apiModule.details.description)}</p>    
            <h3 className="mt-5 ml-5 text-primary">Next</h3>
              <p className="mt-2 ml-5">Lets move to other sub topics, which is<a className="btn btn-link"  data-id= {apiModule===null?'':decodeURIComponent(apiModule.details.title)} onClick={this.subLink}>{apiModule===null?'':decodeURIComponent(apiModule.title)}</a></p>        
          </div>       
        </section> 
        <footer className="main-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
               <p>Bioris CORS Gateway</p> 
            </div>
            <div className="col-sm-6 text-right">
               <p>BizObjek Sdn Bhd &copy; 2018</p>
            </div>
          </div>
        </div>
      </footer>      
      </Fragment>
    )
  }
}
