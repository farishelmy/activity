import React, { Component,Fragment } from 'react'
import parser from 'bbcode-to-react'
import { Button } from 'reactstrap'

export default class Activity extends Component {
  render() {    
    const apiModule = this.props.apiModule
       
    return (
      <Fragment>
        <div>
          <h3 className="mt-4 ml-5 text-primary">{apiModule===null?'':decodeURIComponent(apiModule.title)}</h3>
            <p className="mt-2 ml-5 mr-5 text-justify">
                {apiModule===null?'':decodeURIComponent(apiModule.details.description)}
              </p>   
          <h3 className="mt-4 ml-5 text-primary">Method</h3>
            <p className="mt-2 ml-5 mr-5 text-justify">Use below-given a suitable HTTP method for the action performed by API. 
              <pre className="mt-2 bg-white border border-dark">
                {apiModule===null?'':decodeURIComponent(apiModule.details.method)}
              </pre> 
            </p> 
          <h3 className="mt-4 ml-5 text-primary">Parameter</h3>
              <p className="mt-1 ml-5 mr-5 text-justify">
              <p>This is a request body parameter, and the format is usually JSON. This JSON object may be a lengthy list of key value pairs with multiple levels of nesting.</p>
               <pre className="bg-white border border-dark">                
                    {apiModule===null?'': parser.toReact(decodeURIComponent(apiModule.details.parameter))}
               </pre>          
              </p>  
          <h3 className="mt-4 ml-5 text-primary">URL</h3>
              <p className="mt-2 ml-5 mr-5 text-justify">The URL interface represents an object providing static methods used for creating object URLs.
                <pre className="mt-2 bg-white border border-dark">                
                    {apiModule===null?'': parser.toReact(decodeURIComponent(apiModule.details.url))}
                </pre>          
              </p>  
          <h3 className="mt-4 ml-5 text-primary">Example</h3>
              <p className="mt-1 ml-5 mr-5 text-justify">
              <p>Use fetch() to GET/POST/PUT/DELETE JSON-encoded data.</p>
                <pre className="bg-white border border-dark">
                {apiModule===null?'': parser.toReact('[color=#007bff]const[/color] url = '+decodeURIComponent(apiModule.details.url)+decodeURIComponent(apiModule.details.alias)+'?param='+decodeURIComponent(apiModule.details.parameter).replace(/[\r\n]\s*/g,''))}
                    <br/>{apiModule===null?'': parser.toReact(decodeURIComponent(apiModule.details.example))}
                </pre>          
              </p>  
          <h3 className="mt-4 ml-5 text-primary">Response</h3>
              <p className="mt-2 ml-5 mr-5 text-justify">
              <p>The Response interface of the Fetch API represents the response to a request.</p>
                <pre className="bg-white border border-dark">
                    {apiModule===null?'': decodeURIComponent(apiModule.details.response)}
                </pre>
              </p>
              <h3 className="mt-4 ml-5 text-primary">Next</h3>
              <p className="mt-2 ml-5">Lets move to other sub topics, which is<Button color="link" data-name="fiffth" onClick={this.props.activityList}>Update Activity</Button></p>        
        </div> 
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
