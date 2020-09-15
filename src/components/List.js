import React from 'react';

function List(props) {
    return(
        <div>
            <div>Goals</div>
            {props.children}
        </div>
    )
}

export default List;