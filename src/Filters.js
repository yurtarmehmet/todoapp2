import React, {useState, useEffect} from 'react';


const filterOptions = [
    { label: "All", slug: "all"},
    { label: "Completed", slug: "completed"},
    { label: "Not Completed", slug: "notCompleted"}
];

const Filters = (props) => {
    // state alternative
    const [filter, setFilter] = useState("all");


    // Did update and did moıunt alternative
    useEffect(() => {
        props.filterTodos(filter);
    }, [filter]);

    return (
        <div style={{margin: "20px"}}>
            {
                filterOptions.map((option) => {
                    return <button onClick={(e) => {
                        // prevent default click action
                        e.preventDefault();
                        setFilter(option.slug);
                    }} style={{color: "#fff", background: option.slug === filter ? "red" : "gray"}}>{option.label}</button>
                })
            }
        </div>
    );
};

export default Filters;