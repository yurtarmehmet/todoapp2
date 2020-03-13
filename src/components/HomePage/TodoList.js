import React, {Component} from 'react';
import propTypes from "prop-types";
import {ListGroup} from "react-bootstrap";
import classNames from "classnames";
import styled, {css} from 'styled-components'
import RemoveItem from "./RemoveItem";
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";
import {setTodos, setLoading ,toggleTodo} from "../../state/ducks/todo/actions";

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
        if(filteredTodos.length < 1){
            return <div>Todo Yok</div>
        }
        console.log("PROPS",this.props);
        return (
            <ListGroup>
                {
                    this.props.loading.indexOf("removingTodo") > -1 && <h1>Siliniyor...</h1>
                }
                {filteredTodos.map((todo) => {
                    return <ListGroup.Item key={todo.id} variant="info" onClick={(e) => {
                        e.stopPropagation();
                        this.props.history.push(`/todoDetay/${todo.id}`);
                    }}>
                        <ListItem completed={todo.completed} onClick={(e) => {
                            e.stopPropagation();
                            props.toggleTodo(todo.id);
                        }}>
                        <span>
                            {todo.title}
                        </span>
                            <RemoveItem todoId={todo.id}/>
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
        filter: state.todos.filter,
        todos: state.todos.todos,
        loading: state.loading.loading
    }
};

const mapDispatchToProps = dispatch => ({
    toggleTodo: (id) => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TodoList));