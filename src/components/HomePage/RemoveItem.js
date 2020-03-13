import React from 'react';
import styled, {css} from "styled-components";
import {toggleTodo, removeTodo} from "../../state/ducks/todo/actions";
import {connect} from "react-redux";

const Remove = styled.div`
        color: #fff;
        padding: 10px;
        background: red;
        width: 40px;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
        margin-left: 30px;
    `;


class RemoveItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    scrollFunc(){
        console.log("Scroll Yapılıyor");
    }

    componentDidMount(){
        console.log("1. Component mount oldu");
        window.addEventListener("scroll", this.scrollFunc)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("2. Component update oldu");
    }

    componentWillUnmount() {
        console.log("3. Component Gidiyor");
        window.removeEventListener("scroll", this.scrollFunc)
    }
    render() {
        return (
            <Remove onClick={(e) => {
                e.stopPropagation();
                this.props.removeTodo(this.props.todoId);
            }}>
                Sil
            </Remove>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => dispatch(removeTodo(id))
});

export default connect(null, mapDispatchToProps)(RemoveItem);