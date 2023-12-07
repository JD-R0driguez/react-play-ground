import React from 'react';
import ReactDom from 'react-dom';

function Page(){
    return(
        <App />
    )
}

ReactDom.render(<Page />, document.getElementById('root'))
