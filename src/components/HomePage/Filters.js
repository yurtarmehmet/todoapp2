import React from 'react';
import {connect} from "react-redux";
import {setFilter} from "../../state/ducks/todo/actions";

const filterOptions = [
    { label: "All", slug: "all"},
    { label: "Completed", slug: "completed"},
    { label: "Not Completed", slug: "notCompleted"}
];

const Filters = (props) => {
    const {activeFilter, setFilter} = props;
    return (
        <div style={{margin: "20px"}}>
            {
                filterOptions.map((option) => {
                    return <button onClick={(e) => {
                        e.preventDefault();
                        setFilter(option.slug);
                    }}
                    style={{
                        background: activeFilter === option.slug ? "red" : "gray",
                        color: "#fff"
                    }}
                    >{option.label}</button>
                })
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        activeFilter: state.todos.filter
    }
};

const mapDispatchToProps = dispatch => ({
   setFilter: (filter) => dispatch(setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);