import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import state, {subscribe, updateNewPostText} from "./Redux/state";
import {addPost} from "./Redux/state";




let rerenderEntireTree =(state)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

