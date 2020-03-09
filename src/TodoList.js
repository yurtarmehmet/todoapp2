import React, {Component} from 'react';
import {ListGroup} from "react-bootstrap";
import classNames from "classnames";
import styled, {css} from 'styled-components'
import RemoveItem from "./RemoveItem";
import { withRouter } from 'react-router-dom'

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
                        console.log(this.props);
                        this.props.history.push(`/todoDetay/${todo.id}`);
                    }}>
                        <ListItem completed={todo.completed} onClick={() => {
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

export default withRouter(TodoList);