import React from 'react';

const TodoDetail = (props) => {
    console.log(props);
    return (
        <div>
            Todo Detail
            <h3>ID: {props.match.params.id}</h3>
        </div>
    );
};

export default TodoDetail;