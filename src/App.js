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
            _todos: [],
            todos: [],
            loading: true,
            filter: "all"
        }
    }

    componentDidMount(){
        console.log("1. Component mount oldu");
        const todos = localStorage.getItem('todos');
        if(todos){
            setTimeout(() => {
        this.setState({
                    loading: false
                });
                console.log(JSON.parse(todos));
                this.props.setTodosFromComponent(JSON.parse(todos));
            }, 2000)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("2. Component update oldu");
    }

    componentWillUnmount() {
        console.log("3. Component Gidiyor")
    }


    toggle = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if(todo.id === id){
                    return {...todo, completed: !todo.completed};
                }
                return todo;
            }),
            _todos: this.state._todos.map((todo) => {
                if(todo.id === id){
                    return {...todo, completed: !todo.completed};
                }
                return todo;
            })
        }, () => {
            localStorage.setItem('todos', JSON.stringify(this.state.todos));
        })
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

    filterTodos = (filter) => {
        this.setState({
            filter: filter
        });
    }

    render() {
        let  Comp;
        if(this.state.loading){
            Comp = <h1>Yükleniyor...</h1>
        }else{
            if(this.props.todos.length > 0){
                Comp = <TodoList {...this.state} todos={this.props.todos} toggleTodo={this.toggle} removeTodo={this.remove}/>;
            }else {
                Comp = <h1>Todo Bulunmuyor</h1>;
            }
        }
        console.log(JSON.stringify(this.props.todos));
        return (
            <>
                <h2>Todo List</h2>
                <Filters name="name" surname="surname" filterTodos={this.filterTodos}/>
                <AddTodo addTodo={this.add} />
                {
                    Comp
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

