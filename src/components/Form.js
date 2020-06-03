import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username : '' ,
            comments : '',
            skill :'React'
        }
    }
    textHandle = event => {
        this.setState({
            username : event.target.value
        })
    } 
    commentHandle = event => {
        this.setState({
            comments : event.target.value
        })
    }
    skillHandle = event => {
        this.setState({
            skill : event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.skill} ${this.state.username} ${this.state.comments}`)
        event.preventDefault()
    }
    render() {
        const {username,comments,skill} = this.state
        // Or else the state variables would be refered as this.state.username ....
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>NAME</label>
                    <input type='text' value={username} onChange={this.textHandle}></input>
                </div>
                <div>
                    <lable>COMMENTS</lable>
                    <textarea value={comments} onChange={this.commentHandle}></textarea>
                </div>
                <div>
                    <label>SKILL</label>
                    <select value={skill} onChange={this.skillHandle}>
                        <option value='React'>React</option>
                        <option value='Vue'>Vue</option>
                        <option value='Angular'>Angular</option>
                    </select>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default Form