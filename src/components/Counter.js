import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
    
        this.state = {
            count:0 
        }
    }
/*    
    clicked(){
        this.setState({
            count:this.state.count+1
        })
    } 

    refresh(){
        this.setState({
            count:0
        })
    }
*/
    clicked(){
        this.setState((prevState)=> ({
            count:prevState.count+1
        }))
    }
    render() {
        return (
            <div>
                count : {this.state.count}            
                <br />   <button onClick = {()=> this.clicked()}>Hit It</button>
                <br />   <button onClick ={()=> this.refresh()}>REFRESH COUNT</button>
            </div>
        )
    }
}

export default Counter
