import React, {useState, useEffect} from 'react';

const Filters = () => {
    // state alternative
    const [filter, setFilter] = useState("not completed");


    // Did update and did moıunt alternative
    useEffect(() => {
        // this.getData();
    }, []);

    return (
        <div>
            Filters : {filter}
        </div>
    );
};

export default Filters;