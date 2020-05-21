import React,{Component} from 'react'

class HelloC extends Component {
    render() {
        return (
            <div>
                <h1> HELLO THERE {this.props.name}!!</h1>
                {this.props.children}
            </div>
        )
    }
}

export default HelloC