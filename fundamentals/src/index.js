import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './images/logo-react.svg';


const MyNav = () =>{
    return(
        <nav>
            <img src={Logo} alt="react logo" width="50px" height="auto"/>
            <h1>Fun Facts About React</h1>
            <ul>
                <li>Component-Based Architecture</li>
                <li>Virtual DOM for Performance Optimization</li>  
                <li>Developed by Facebook</li>
                <li>JSX - JavaScript Syntax Extension</li>
                <li>React Native for Cross-Platform Development</li>   
            </ul>
        </nav>
    )
}
ReactDOM.render(<MyNav/>, document.getElementById('root'));
// const app_root =  ReactDOM.createRoot(document.getElementById('root'));

// app_root.render(
//     <div>
//         <MyNav/>
//         {/* <MySecondList/> */}
//     </div>
// );

