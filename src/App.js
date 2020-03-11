import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import AddTodo from "./AddTodo";
import Filters from "./Filters";
import TodoList from "./TodoList";
import {connect} from "react-redux";
import {setTodos} from "./actions";
import {store} from "./store";


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            _todos: []
        }
    }

    componentDidMount(){
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("2. Component update oldu");
    }

    componentWillUnmount() {
        console.log("3. Component Gidiyor")
    }

    add = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo],
            _todos: [...this.state._todos, todo]
        }, () => {
            localStorage.setItem('todos', JSON.stringify(this.state.todos));
        });
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
        return (
            <>
                <h2>Todo List</h2>
                <Filters />
                <AddTodo addTodo={this.add} />
                {
                    <TodoList  removeTodo={this.remove}/>
                }
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dicta dolores ducimus eius eligendi facilis laudantium magni maiores minus nihil perspiciatis possimus praesentium, quae repellat temporibus ullam veritatis vero, voluptates?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dicta dolores ducimus eius eligendi facilis laudantium magni maiores minus nihil perspiciatis possimus praesentium, quae repellat temporibus ullam veritatis vero, voluptates?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dicta dolores ducimus eius eligendi facilis laudantium magni maiores minus nihil perspiciatis possimus praesentium, quae repellat temporibus ullam veritatis vero, voluptates?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dicta dolores ducimus eius eligendi facilis laudantium magni maiores minus nihil perspiciatis possimus praesentium, quae repellat temporibus ullam veritatis vero, voluptates?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dicta dolores ducimus eius eligendi facilis laudantium magni maiores minus nihil perspiciatis possimus praesentium, quae repellat temporibus ullam veritatis vero, voluptates?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dicta dolores ducimus eius eligendi facilis laudantium magni maiores minus nihil perspiciatis possimus praesentium, quae repellat temporibus ullam veritatis vero, voluptates?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dicta dolores ducimus eius eligendi facilis laudantium magni maiores minus nihil perspiciatis possimus praesentium, quae repellat temporibus ullam veritatis vero, voluptates?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dicta dolores ducimus eius eligendi facilis laudantium magni maiores minus nihil perspiciatis possimus praesentium, quae repellat temporibus ullam veritatis vero, voluptates?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dicta dolores ducimus eius eligendi facilis laudantium magni maiores minus nihil perspiciatis possimus praesentium, quae repellat temporibus ullam veritatis vero, voluptates?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dicta dolores ducimus eius eligendi facilis laudantium magni maiores minus nihil perspiciatis possimus praesentium, quae repellat temporibus ullam veritatis vero, voluptates?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dicta dolores ducimus eius eligendi facilis laudantium magni maiores minus nihil perspiciatis possimus praesentium, quae repellat temporibus ullam veritatis vero, voluptates?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dicta dolores ducimus eius eligendi facilis laudantium magni maiores minus nihil perspiciatis possimus praesentium, quae repellat temporibus ullam veritatis vero, voluptates?

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = dispatch => ({
   setTodosFromComponent: (todos) => dispatch(setTodos(todos))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

