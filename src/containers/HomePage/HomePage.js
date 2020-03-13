import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {HomePageComponents} from "../../components";
import {connect} from "react-redux";
import {setTodos} from "../../state/ducks/todo/actions";
import {store} from "../../state/store";
import {getTodos} from "../../utils/api";


class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            _todos: []
        }
    }

    componentDidMount(){
        this.props.setTodosFromComponent();
    }

    remove = (id) => {
        this.setState({
            todos: this.state.todos.filter((todo) => {
                return todo.id !== id
            }),
            _todos: this.state._todos.filter((todo) => {
                return todo.id !== id
            })
        }, () => {
            localStorage.setItem('todos', JSON.stringify(this.state.todos));
        })
    }

    render() {
        console.log(this.props.loading.indexOf("loadingTodo"));
        return (
            <>
                <HomePageComponents.PageTitle />
                <HomePageComponents.Filters />
                <HomePageComponents.AddTodo />
                {
                    this.props.loading.indexOf("loadingTodo") > -1 ? <h1 style={{color: "blue", margin: "25px"}}>Yükleniyor</h1> : <HomePageComponents.TodoList />
                }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        loading: state.loading.loading
    }
};

const mapDispatchToProps = dispatch => ({
   setTodosFromComponent: (todos) => dispatch(setTodos(todos))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

