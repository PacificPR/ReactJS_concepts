import React,{Component} from 'react'

class MessageC extends Component{
    constructor(){
        super()
        this.state={
            message: 'Hit Like to Subscribe'
        }
    }

    subscribed() {
        var bt = document.getElementById('2')
        //bt.style.visibility = 'hidden'
            bt.innerHTML = 'Unsubscribe'
            this.setState({
                message: 'Thanks for Subscribing !!'
            })
    }
    clicker(){
        console.log('clicked')
    }
    render(){
        return (
            <div>            
                <h2>{this.state.message}</h2>
                <button id='2' onClick ={this.clicker}>SUBSCRIBE !</button>
            </div>
        )
    }
}

export default MessageC