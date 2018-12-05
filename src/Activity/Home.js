import React, { Component,Fragment } from 'react'
import { Button,Jumbotron } from 'reactstrap'

export default class Home extends Component {
  render() {
    return (
      <Fragment >
       <Jumbotron>
        <h1 className="display-3 text-center">Bioris Cors Gateway</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="text-justify"/>        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit quam ac accumsan venenatis. Vivamus maximus accumsan tellus a tempor. Fusce imperdiet non risus sit amet egestas. Nullam nec suscipit justo. Praesent commodo dui purus, non pharetra magna sagittis nec. Mauris in scelerisque magna. Aliquam efficitur fringilla mauris sed vulputate. Fusce dictum ligula urna, sed dictum ante scelerisque eu. Suspendisse ac iaculis lorem. Ut eleifend augue vitae laoreet bibendum. Integer eleifend sollicitudin lorem, et porttitor ligula.</p>        
      </Jumbotron>
       
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
