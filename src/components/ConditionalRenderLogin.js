import React, { Component } from 'react'

class ConditionalRenderLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIN:true     
        }
    }
    
    render() {
        //To render either something or nothing at all
        return this.state.loggedIN && <div><h1>You're Logged In</h1></div>
        
        //To either one of the two  
        /*return (
            this.state.loggedIN?
            <div><h1>You're logged in</h1></div> :
            <div><h1>Not logged in</h1></div> 
        )
        */

      /*  let log 
        if(this.state.loggedIN)
            log=<div><h1>You're logged In</h1></div>
        else
            log=<div><h1>Not logged In</h1></div>
        return <div>{log} </div> 
      */ 

      /*  if(this.state.loggedIN){
        return (
            <div>
                <h1>You're logged In</h1>
            </div>
        )
        }
        else {
        return (
            <div>
                <h1>Not Logged In</h1>     
            </div>
        )
        }
      */
    }
}

export default ConditionalRenderLogin