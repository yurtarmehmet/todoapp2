import React, {Component} from 'react';
import {ListGroup} from "react-bootstrap";
import classNames from "classnames";
import styled, {css} from 'styled-components'
import RemoveItem from "./RemoveItem";

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
        return (
            <ListGroup>
                {props.todos.map((todo) => {
                    return <ListGroup.Item key={todo.id} variant="info">
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

export default TodoList;