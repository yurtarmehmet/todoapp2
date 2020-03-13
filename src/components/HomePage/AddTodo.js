import React, {Component} from 'react';
import {addTodo} from "../../state/ducks/todo/actions";
import {connect} from "react-redux";


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
        this.props.addTodo({title: this.state.value, completed: false})
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
                {this.props.loading.indexOf("addingTodo") > -1 && <h1 style={{color: "red", margin: "25px"}}>Ekleniyor...</h1>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading.loading
    }
};

const mapDispatchToProps = dispatch => ({
    addTodo: (todo) => dispatch(addTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
