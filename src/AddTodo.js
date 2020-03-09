import React, {Component} from 'react';


class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
    }

    changeInput = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    addTodo = () => {
        this.props.addTodo({id: Math.random(), title: this.state.value, completed: false})
        this.setState({
            value: ""
        }, () => {
        });
    }

    render(){
        return (
            <div>
                <input type="text" value={this.state.value} onChange={(e) => this.changeInput(e)}/>
                <button onClick={(e) => {this.addTodo()}}>Ekle</button>
            </div>
        );
    }
}


export default AddTodo;