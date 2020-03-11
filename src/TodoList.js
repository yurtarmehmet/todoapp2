import React, {Component} from 'react';
import propTypes from "prop-types";
import {ListGroup} from "react-bootstrap";
import classNames from "classnames";
import styled, {css} from 'styled-components'
import RemoveItem from "./RemoveItem";
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";
import {setTodos, setLoading ,toggleTodo} from "./actions";

const ListItem = styled.span`
    background: rebeccapurple;
    color: #fff;
    cursor: pointer;
    > span {
          ${props =>
            props.completed && css`
          text-decoration: line-through;
    `};
    }
`;


class TodoList extends Component {
    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.props.setTodosFromComponent();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.todos.length < this.props.todos.length){
            window.scrollTo({
                top: 10000,
                behavior: 'smooth'
            });
        }else {
        }
    }

    render() {
        const props = this.props;
        if(props.loading){
            return <div>Yükleniyor</div>
        }
        if(!props.todos.map){
            return <div>Page</div>
        }
        const filteredTodos = props.todos.filter((todo) => {
            if(props.filter === "all"){
                return true;
            }else if(props.filter === "completed"){
                return todo.completed
            }else{
                return !todo.completed
            }
        });
        return (
            <ListGroup>
                {filteredTodos.map((todo) => {
                    return <ListGroup.Item key={todo.id} variant="info" onClick={() => {
                        this.props.history.push(`/todoDetay/${todo.id}`);
                    }}>
                        <ListItem completed={todo.completed} onClick={(e) => {
                            e.stopPropagation();
                            props.toggleTodo(todo.id);
                        }}>
                        <span>
                            {todo.title}
                        </span>
                            <RemoveItem removeTodo={props.removeTodo} todoId={todo.id}/>
                        </ListItem>
                    </ListGroup.Item>
                })}
            </ListGroup>
        );
    }
}

TodoList.propTypes = {
    todos: propTypes.array
};

const mapStateToProps = (state) => {
    return {
        filter: state.filter.filter,
        todos: state.todos.todos,
        loading: state.loading.loading
    }
};

const mapDispatchToProps = dispatch => ({
    setTodosFromComponent: (todos) => dispatch(setTodos(todos)),
    setLoading: (loading) => dispatch(setLoading(loading)),
    toggleTodo: (id) => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TodoList));