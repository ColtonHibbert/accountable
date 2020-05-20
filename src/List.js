import React from 'react';

const List = (props) => {
    return(
        <div>
            <div>Goals</div>
            {props.children}
        </div>
    )
}

export default List;