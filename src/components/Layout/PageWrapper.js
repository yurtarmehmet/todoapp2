import React, {Component, useEffect} from 'react';


const PageWrapper = (props) => {

    useEffect(() => {
        window.scrollTo(0,0);
        document.title = props.name;
    }, []);

    return (
        <div>
            {props.children}
        </div>
    );
};


export default PageWrapper;