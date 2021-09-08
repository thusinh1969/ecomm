import React from 'react';

import './page.styles.scss';

const Hats_page = (props) => {
    
    console.log(props)

    return (
        <div>
            <h1>Hats page {props.match.url}</h1>
        </div>
    )
};

export default Hats_page;