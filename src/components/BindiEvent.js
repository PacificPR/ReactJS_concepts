import React, { Component } from 'react'

class BindiEvent extends Component {
    constructor(props) {
        super(props)
        //this.clickHandler = this.clickHandler.bind(this) 3rd method
        //binding the clickHandler to this, in constructor so it doesn't 
        //render again and again
        this.state = {
            message:'Please Like !!'
        }
    }
    /*clickHandler(){
        console.log(this)
        this.setState({
            message: 'Liked !'
        })
    }*/ 
    //4th method , use array function to define eventHandler
    clickHandler = () => this.setState({message:'Liked !'})
    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
        {/*<button onClick={this.clickHandler.bind(this)}>Like !</button>
            1st method, binding the event in render function */
        }
        {/*<button onClick={() =>this.clickHandler()} >Like !</button>
        2nd Method, Using array function to call the evnetHandler in render*/}
        {/*<button onClick={this.clickHandler} >Like !</button>
        4th Method, Used arrow function to define clickHandler*/}
        <button onClick={this.clickHandler} >Like !</button> 
            </div>
        )
    }
}

export default BindiEvent
//Most used is,3rd method binding the eventHandler in constructor itself
//Arrow function,4th method is good too as it avoids rendering again
// and again